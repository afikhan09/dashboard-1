import { useContext } from "react";
import "./ExecutiveItem.css";
import { DashboardContext } from "../../Context/DashboardContext";

const ExecutiveItem = ({ widgets, categoryid }) => {
  const { removeWidgetFromCategory } = useContext(DashboardContext);

  return (
    <div className="ExecutiveItemContainer">
      {widgets.map((widget) => (
        <div key={widget.id} className="card">
          <div className="card-body">
            <h2 className="card-title">{widget.name}</h2>
            <p className="card-content">{widget.description}</p>
            <button
              onClick={() => removeWidgetFromCategory(categoryid, widget.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecutiveItem;

{
  /* <div>
{data.categories.map(category => (
  <div key={category.id}>
    <h2>{category.name}</h2>
    <ul>
      {category.widgets.map(widget => (
        <li key={widget.id}>
          {widget.name} - ${widget.price}
        </li>
      ))}
    </ul>
    <AddWidgetForm categoryId={category.id} />
  </div>
))}
</div> */
}
