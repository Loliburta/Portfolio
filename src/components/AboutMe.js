import React from "react";
import { WindowSize } from "./smallComponents/WindowSize";
import { Element } from "react-scroll";

// SCSS
import "../style.scss";

// SVG
import { ReactComponent as BuildingsPhoneSVG } from "../svgs/BuildingsPhoneSVG.svg";
import { ReactComponent as BuildingsSVG } from "../svgs/BuildingsSVG.svg";
import { ReactComponent as BuildingsBigSVG } from "../svgs/BuildingsBigSVG.svg";

import { ReactComponent as RectangleSVG } from "../svgs/RectangleSVG.svg";
import { ReactComponent as LineSVG } from "../svgs/LineSVG.svg";

const AboutMe = () => {
  let width = WindowSize().width;
  return (
    <>
      <Element id="about-me" name="about-me">
        <div className="About-me-section">
          {width > 2000 ? (
            <BuildingsBigSVG className="UpperBuildingsSVG" />
          ) : width < 800 ? (
            <BuildingsPhoneSVG className="UpperBuildingsSVG" />
          ) : (
            <BuildingsSVG className="UpperBuildingsSVG" />
          )}
          <div className="container">
            <div className="all-text">
              <div className="title-about-me" id="title-about-me">
                <RectangleSVG className="rectangleSVG-about" />
                <h2 className="big-text-about">About Me</h2>
                <LineSVG className="lineSVG" />
              </div>
              <h3 className="medium-text" id="medium-text">
                Hello! I’m Mateusz and I build things on the web
              </h3>
              <h3 className="small-text" id="small-text">
                Currently, I'm looking for an opportunity to begin my career in
                web development. I enjoy learning new skills and expanding on
                the skills I already have. Since I was young, I’ve been
                fascinated by new technologies and always wanted to be a part of
                interesting and meaningful projects. In my free time, I enjoy
                playing guitar and improving my keyboard typing speed.
              </h3>
            </div>
          </div>
          {width > 2000 ? (
            <BuildingsBigSVG className="LowerBuildingsSVG" />
          ) : width < 800 ? (
            <BuildingsPhoneSVG className="LowerBuildingsSVG" />
          ) : (
            <BuildingsSVG className="LowerBuildingsSVG" />
          )}
        </div>
      </Element>
      
    </>
  );
};

export default AboutMe;
