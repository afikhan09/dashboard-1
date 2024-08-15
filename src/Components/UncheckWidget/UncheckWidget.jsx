import "./UncheckWidget.css";

const UncheckWidget = ({ isOpen, onClose }) => {
  //   if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Uncheck Widget</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="options">
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
          <button>Option 4</button>
        </div>
        <div className="checkboxes">
          <label>
            <input type="checkbox" />
            Checkbox 1
          </label>
          <label>
            <input type="checkbox" />
            Checkbox 2
          </label>
        </div>
      </div>
    </div>
  );
};

export default UncheckWidget;
