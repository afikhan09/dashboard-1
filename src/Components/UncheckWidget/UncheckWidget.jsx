import { useContext } from "react";
import "./UncheckWidget.css";
import { DashboardContext } from "../../Context/DashboardContext";

const UncheckWidget = ({ isOpen, onClose }) => {
  const { dashBoardData, removeWidgetFromCategory } =
    useContext(DashboardContext);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Uncheck Widget</h4>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>

        <div>
          <div className="options">
            {dashBoardData.categories.map((category) => (
              <div key={category.id} className="categoryheader">
                <h3>{category.name}</h3>
                <div className="checkboxes">
                  {category.widgets.map((widget) => (
                    <label key={widget.id}>
                      <input
                        onClick={() =>
                          removeWidgetFromCategory(category.id, widget.id)
                        }
                        type="checkbox"
                      />
                      <h3>{widget.name}</h3>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="UncheckBtnsConfirmBtn">
          <button onClick={onClose} className="Confirm">
            Confirm
          </button>
          <button onClick={onClose} className="Cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UncheckWidget;
