import React from "react";
import "./ExecutiveList.css";
import { useContext } from "react";
import { DashboardContext } from "../../Context/DashboardContext";
import ExecutiveItem from "../ExecutiveItem/ExecutiveItem";
import AddWidget from "../AddWidgetInput/AddWidget";
import { useState } from "react";

const ExecutiveList = () => {
  const [showForm, setShowForm] = useState(false);
  const [categoryId, setcategoryId] = useState("");

  const HandleShowForm = (catid) => {
    setShowForm(true);
    setcategoryId(catid);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const { dashBoardData, filteredWidgets } = useContext(DashboardContext);

  const categoriesToDisplay =
    filteredWidgets && filteredWidgets.length > 0
      ? filteredWidgets
      : dashBoardData.categories;

  return (
    <>
      {showForm ? (
        <AddWidget categoryid={categoryId} closeForm={handleCloseForm} />
      ) : (
        <div className="">
          <div className="ExecutiveListContainer">
            {categoriesToDisplay.map((category) => (
              <div className="executiveDashboardContainer" key={category.id}>
                <div>
                  <h5>{category.name}</h5>

                  <ExecutiveItem
                    categoryid={category.id}
                    widgets={category.widgets}
                  />
                </div>
                <div>
                  <button
                    className="AddWidgetBtn"
                    onClick={() => HandleShowForm(category.id)}
                  >
                    Add widget
                  </button>
                </div>
              </div>
            ))}

            {/* <div className="dashboard-right">
               <button className="AddWidgetBtn">Add widget</button> 
              {/* <AddWidget /> */}
            {/* <button className="UncheckWidgetBtn">Uncheck Widget</button>
            </div>  */}
          </div>
        </div>
      )}
    </>
  );
};

export default ExecutiveList;
