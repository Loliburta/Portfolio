import React from "react";
import { Link } from "react-scroll";
import { WindowSize } from "./smallComponents/WindowSize";
import NavigationBarPhone from "./phone/NavigationBarPhone";
import PDF from "../Mateusz_Maranowski_CV.pdf";

// SCSS
import "../style.scss";

// SVG
import { ReactComponent as AboutSVG } from "../svgs/AboutSVG.svg";
import { ReactComponent as ProjectsSVG } from "../svgs/ProjectsSVG.svg";
import { ReactComponent as ContactSVG } from "../svgs/ContactSVG.svg";
import { ReactComponent as ResumeSVG } from "../svgs/ResumeSVG.svg";

const NavigationBar = () => {
  let width = WindowSize().width;
  return (
    <>
      {width > 1049 ? (
        // PC Navbar
        <nav className="navigation-bar">
          <div className="logo" id="logo">
            <div>
              <h1 className="code-sign">{"<"}</h1>{" "}
              <h1 className="name">Mateusz Maranowski</h1>{" "}
              <h1 className="code-sign">{"/>"}</h1>
            </div>
          </div>
          <div className="nav-links">
            <Link to="about-me" spy={true} smooth={true} duration={500}>
              <div className="element" id="e1">
                <AboutSVG className="svg" />
                <h2 className="green-text">About</h2>
              </div>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={600}>
              <div className="element" id="e2">
                <ProjectsSVG className="svg" />

                <h2 className="green-text">Projects</h2>
              </div>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={700}>
              <div className="element" id="e3">
                <ContactSVG className="svg" />
                <h2 className="green-text">Contact</h2>
              </div>
            </Link>
            <a href={PDF} without rel="noopener noreferrer" target="_blank">
              <div className="element" id="e4">
                <ResumeSVG className="svg-resume" />

                <div className="element-resume">
                  <div className="resume-border">
                    <h2 className="green-text">Resume</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </nav>
      ) : (
        <NavigationBarPhone />
      )}
    </>
  );
};

export default NavigationBar;
