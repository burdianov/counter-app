import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-success">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
