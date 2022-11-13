import React from "react";
import "./SidebarLeft.css";
const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <ul className="sidebarLeft__list">
        <li className="sidebarLeft__list-items">
          <i className="fa-brands fa-github-alt sidebarLeft__list-items__socials"></i>
        </li>
        <li className="sidebarLeft__list-items">
          <i className="fa-brands fa-linkedin-in sidebarLeft__list-items__socials"></i>
        </li>
        <li className="sidebarLeft__list-items">
          <i className="fa-brands fa-twitter sidebarLeft__list-items__socials"></i>
        </li>
        <li className="sidebarLeft__list-items">
          <i className="fa-brands fa-medium sidebarLeft__list-items__socials"></i>
        </li>
      </ul>
    </div>
  );
};
export default SidebarLeft;
