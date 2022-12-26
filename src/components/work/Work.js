import React from "react";
import HeaderTop from "../header-top/HeaderTop";
import Project from "./Project";

const Work = () => {
  return (
    <div>
      <HeaderTop count={"03"} headingName={"Some Things I’ve Built"} />
      <Project direction="left" />
      <Project direction="right" />
      <Project direction="left" />
    </div>
  );
};

export default Work;
