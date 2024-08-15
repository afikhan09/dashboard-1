import React, { useState } from "react";
import "./AddWidget.css";

const AddWidget = () => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setwidgetDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", widgetName);
    console.log("Description:", widgetDescription);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
