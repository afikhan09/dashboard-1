import React, { useState } from "react";
import "./AddWidget.css";
import { useContext } from "react";
import { DashboardContext } from "../../Context/DashboardContext";
import { v4 as uuidv4 } from "uuid";

const AddWidget = ({ categoryid, closeForm }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setwidgetDescription] = useState("");

  const { addWidgetToCategory } = useContext(DashboardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", widgetName);
    console.log("Description:", widgetDescription);
    const newWidget = {
      id: uuidv4(),
      name: widgetName,
      description: widgetDescription,
    };

    addWidgetToCategory(categoryid, newWidget);

    setWidgetName("");

    setwidgetDescription("");

    closeForm();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {console.log(categoryid.categoryid)}
        <label htmlFor="widgetName">widget-Name:</label>
        <input
          type="text"
          id="widgetName"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          required
        />

        <label htmlFor="widgetDescription">widget-Description:</label>
        <textarea
          id="widgetDescription"
          value={widgetDescription}
          onChange={(e) => setwidgetDescription(e.target.value)}
          rows="4"
          required
        />

        <button className="SubmitWidgetBtn" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddWidget;
