import React, { createContext, useState, useMemo, useEffect } from "react";
import { data } from "../Data";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashBoardData, setdashBooardData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWidgets, setFilteredWidgets] = useState([]);

  // function to add a widget
  const addWidgetToCategory = (categoryId, newWidget) => {
    setdashBooardData((prevData) => {
      const updatedCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, newWidget],
          };
        }
        return category;
      });

      return { ...prevData, categories: updatedCategories };
    });
  };

  // function to remove a widget
  const removeWidgetFromCategory = (categoryId, widgetId) => {
    setdashBooardData((prevData) => {
      const updatedCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          };
        }
        return category;
      });

      return { ...prevData, categories: updatedCategories };
    });
  };

  // useeffect fn to search a specific widget
  useEffect(() => {
    const newFilteredData = dashBoardData.categories
      .map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.widgets.length > 0);

    setFilteredWidgets(newFilteredData);
  }, [searchTerm, dashBoardData]);

  return (
    <DashboardContext.Provider
      value={{
        dashBoardData,
        addWidgetToCategory,
        removeWidgetFromCategory,
        filteredWidgets,
        setSearchTerm,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
