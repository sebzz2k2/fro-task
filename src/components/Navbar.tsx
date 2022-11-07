import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let path = window.location.pathname;
    setActive(path.substring(1));
  }, []);
  return (
    <div className="navContainer">
      <h3 className="headingText">FlipSyde</h3>
      <div className="nav">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/about-us" className="navLink">
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
