import "./Navbar.css";
import { useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";
import { useState } from "react";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchTerm: setContextSearchTerm } = useContext(DashboardContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setContextSearchTerm(value);
  };

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="Pages">
          <span>Home</span>
          <span>Dashboard</span>
        </div>
        <div className="Navbar-Search">
          <input
            type="text"
            placeholder="Search Widget by Name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
