import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__navbrand">Sandhya</div>
      <div className="navbar__navlinks">
        <ul>
          <li>
            <span>01.</span>About
          </li>
          <li>
            <span>02.</span>Experience
          </li>
          <li>
            <span>03.</span>Work
          </li>
          <li>
            <span>04.</span>Contact
          </li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
