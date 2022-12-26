import React from "react";
import "./Project.css";
const Project = ({ direction }) => {
  return (
    <div
      className="project"
      style={{ flexDirection: `${direction == "right" ? "row-reverse" : ""}` }}
    >
      <div className="project__image">
        <img src="https://source.unsplash.com/random" alt="random" />
      </div>
      <div className="project__data">
        <h3
          className="project__data-name"
          style={{ textAlign: `${direction == "right" ? "start" : ""}` }}
        >
          project 1
        </h3>
        <div
          className="project__data-description"
          style={{
            right: `${direction == "right" ? "45%" : 0}`,
            left: `${direction == "right" ? 0 : "45%"}`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quae
          aliquid! Quibusdam ipsum vero consectetur quas culpa eos ratione
        </div>
        <ul
          className="project__data-tech"
          style={{ textAlign: `${direction == "right" ? "start" : ""}` }}
        >
          <li>tech 1</li>
          <li>tech 2</li>
          <li>tech 3</li>
          <li>tech 4</li>
        </ul>
        <div
          className="project__data-links"
          style={{
            justifyContent: `${direction == "right" ? "flex-start" : ""}`,
          }}
        >
          <a className="project__data-links__link" href="/">
            <i className="fa-brands fa-github " />
          </a>
          <a className="project__data-links__link" href="/">
            <i className="fa-solid fa-arrow-up-right-from-square " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
