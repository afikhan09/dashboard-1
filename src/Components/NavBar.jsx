import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="Pages">
          <span>Home</span>
          <span>Dashboard</span>
        </div>
        <div className="Navbar-Search">
          <input type="text" placeholder="Search Widget" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
