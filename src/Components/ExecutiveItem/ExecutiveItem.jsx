import "./ExecutiveItem.css";

const ExecutiveItem = ({ title, content }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-content">{content}</p>
          <button className="close-btn">close</button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveItem;
