import React from "react";
import "./HeaderTop.css";

const HeaderTop = ({ count, headingName }) => {
  return (
    <div className="headerTop__heading">
      <span className="headerTop__heading-count">{count}.</span>
      <span className="headerTop__heading-name">{headingName}</span>
      <span className="headerTop__heading-bar"></span>
    </div>
  );
};

export default HeaderTop;
