import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="header__intro-line">Hi, my name is</p>
      <h1>Sandhya Rajwanshi</h1>
      <h1>I build amazing stuff for web.</h1>
      <p>
        I’m a Frontend Developer specializing in React JS. I love working with
        frontend technologies and build amazing{" "}
        <span className="header__ending"> web applications.</span>
      </p>
      <button className="header__about-btn">About me</button>
    </div>
  );
};
export default Header;
