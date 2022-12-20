import React from "react";
import "./About.css";
import aboutImg from "../../assets/about-img.svg";
import HeaderTop from "../header-top/HeaderTop";

const About = () => {
  return (
    <section className="about">
      {/* <div className="about__heading">
        <span className="about__heading-count">01.</span>
        <span className="about__heading-name">About Me</span>
        <span className="about__heading-bar"></span>
      </div> */}
      <HeaderTop count={"01"} headingName={"About Me"} />
      <section className="about__description">
        <div className="about__description-content">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
        </div>
        <div className="about__description-image">
          <img
            src={aboutImg}
            alt="about-img"
            className="about__desciption-image__img"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
