import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__navbrand">Sandhya</div>
      <div className="navbar__navlinks">
        <ul className="navbar__navlinks-list">
          <li className="navbar__navlinks-list-item">
            <span>01.</span>About
          </li>
          <li className="navbar__navlinks-list-item">
            <span>02.</span>Experience
          </li>
          <li className="navbar__navlinks-list-item">
            <span>03.</span>Work
          </li>
          <li className="navbar__navlinks-list-item">
            <span>04.</span>Contact
          </li>
          <li className="navbar__navlinks-list-item">Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
