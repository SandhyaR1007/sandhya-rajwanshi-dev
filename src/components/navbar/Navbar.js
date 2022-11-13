import React, { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showShadow, setShowShadow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY < 50) {
      setShowNav(true);
      setShowShadow(true);
    } else {
      setShowNav(false);
      setShowShadow(false);
    }
    if (window.scrollY == 0) {
      setShowShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [showNav]);

  return (
    <div
      className={`${showNav ? "navbar" : ""} ${
        showShadow ? "navbar__shadow " : ""
      } `}
    >
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
