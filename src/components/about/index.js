import React from "react";
import { Link } from "react-router-dom";
import AboutContent from "./aboutContent"


import "./about.css";

function About() {
  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home 
          </Link>
          {" "}
          | <span>About</span>
          <div className="component__header ">
            <h1>ABOUT US</h1>
          </div>
        </div>
      </div>
      <AboutContent/>
      
     
      <div className="about__statistics container">
        <div className="projects">
        <span>500</span><span>K</span><span>+</span>
        <p>PROJECTS</p>
        </div>
        <div className="projects">
        <span>500</span><span>K</span><span>+</span>
        <p>PARTNERS</p>
        </div>
        <div className="projects">
        <span>500</span><span>K</span><span>+</span>
        <p>FOLLOWERS</p>
        </div>
        <div className="projects">
        <span>500</span><span>K</span><span>+</span>
        <p>YEARS</p>
        </div>
      </div>
    </>
  );
}

export default About;
