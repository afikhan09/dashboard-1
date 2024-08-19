import "./App.css";
import NavBar from "./Components/NavBar";
import UncheckWidget from "./Components/UncheckWidget/UncheckWidget";
import ExecutiveList from "./Components/ExecutiveDashboard/ExecutiveList";
import { DashboardProvider } from "./Context/DashboardContext";

import { useState } from "react";
function App() {
  const [showform, setShowform] = useState(false);

  const handleUncheckForm = () => {
    setShowform(true);
  };

  return (
    <>
      <DashboardProvider>
        <div className="container">
          <NavBar />
        </div>
        {!showform ? (
          <button onClick={handleUncheckForm} className="UncheckWidgetBtn">
            Uncheck Widget
          </button>
        ) : (
          <UncheckWidget onClose={() => setShowform(false)} />
        )}

        <div className="dashboard-container">
          {!showform && <ExecutiveList />}
        </div>
      </DashboardProvider>
    </>
  );
}

export default App;
