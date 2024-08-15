import "./App.css";
import NavBar from "./Components/NavBar";
import ExecutiveItem from "./Components/ExecutiveItem/ExecutiveItem";
import AddWidget from "./Components/AddWidgetInput/AddWidget";
import UncheckWidget from "./Components/UncheckWidget/UncheckWidget";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        {"uncheck render"}
        {<UncheckWidget />}:
        {
          // <div className="dashboard-container">
          //   <div className="dashboard-left">
          //     <ExecutiveItem
          //       title="Sample Card"
          //       content="This is a simple card component."
          //     />
          //     <ExecutiveItem
          //       title="Sample Card"
          //       content="This is a simple card component."
          //     />
          //   </div>
          //   <div className="dashboard-right">
          //     {/* <button className="AddWidgetBtn">Add widget</button> */}
          //     {/* <AddWidget /> */}
          //     <button className="UncheckWidgetBtn">Uncheck Widget</button>
          //   </div>
          // </div>
        }
      </div>
    </>
  );
}

export default App;
