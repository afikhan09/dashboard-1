import "./UncheckWidget.css";

const UncheckWidget = ({ isOpen, onClose }) => {
  //   if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Uncheck Widget</h4>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="options">
          <h3>CSPM</h3>
          <h3>CWPP</h3>
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
        <div className="UncheckBtnsConfirmBtn">
          <button className="Confirm">Confirm</button>
          <button className="Cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UncheckWidget;
