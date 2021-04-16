import React from "react";
import { Element } from "react-scroll";
import { WindowSize } from "./smallComponents/WindowSize";
import ProjectsSectionPhone from "./phone/ProjectsSectionPhone";
import weather_app_video from "../Videos/weather_app_v2.mp4";
import allegro_price_tracker_video from "../Videos/price_tracker_video_final.mp4";
import natural_hazards_tracker from "../Videos/natural_hazards_tracker.mp4";

// SCSS
import "../style.scss";

// SVG
import { ReactComponent as RectangleSVG } from "../svgs/RectangleSVG.svg";
import { ReactComponent as LineSVG } from "../svgs/LineSVG.svg";
import { ReactComponent as GitHubSVG } from "../svgs/GitHubSVG.svg";
import { ReactComponent as ExternalSVG } from "../svgs/ExternalSVG.svg";

const ProjectsSection = () => {
  let width = WindowSize().width;
  return (
    <>
      {width > 900 ? (
        <>
          <div className="projects-section">
            <div className="title" id="title-projects">
              <RectangleSVG className="rectangleSVG" />
              <Element id="projects" name="projects">
                <h2 className="big-text-projects">Projects</h2>
              </Element>

              <LineSVG className="lineSVG" />
            </div>
            <div className="project" id="p1">
              <video autoPlay loop muted className="imgg">
                <source src={weather_app_video} type="video/mp4" />
              </video>

              <div className="description-box">
                <div className="db">
                  <div className="featured-project">Featured Project</div>
                  <div className="project-name">Weather App</div>
                  <div className="description">
                    A nicer look at today's weather and forecast for the next
                    few days with several animations and great looking
                    backgrounds. Check out the weather of any place on earth
                    using your native language.
                  </div>
                  <div className="languages">
                    React Sass Gsap 3 OpenWeatherMap Web Api
                  </div>
                  <div className="GitHubSVGDIV">
                    <a href="https://loliburta.github.io/weather_app_v2/">
                      <ExternalSVG className="ExternalSVG" />
                    </a>
                    <a href="https://github.com/Loliburta/weather_app_v2/tree/master">
                      <GitHubSVG className="GitHubSVG" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="inverted-project" id="p2">
              <div className="description-box">
                <div className="db">
                  <div className="inverted-featured-project">
                    Featured Project
                  </div>
                  <div className="inverted-project-name">
                    Allegro Price Tracker
                  </div>
                  <div className="inverted-description">
                    A web app made for tracking the price of any product on
                    Allegro (Polish version of Amazon) will notify you if the
                    price gets lower than that specified by you, try it now and
                    always pay the lowest price for your online shopping.
                  </div>
                  <div className="inverted-languages">
                    Flask MySQL Beautiful Soup Smtplib
                  </div>
                  <div className="GitHubSVGDIV-i">
                    <a href="https://github.com/Loliburta/Allegro_price_tracker">
                      <GitHubSVG className="GitHubSVG-i" />
                    </a>
                    <ExternalSVG className="ExternalSVG-i" />
                  </div>
                </div>
              </div>
              <video autoPlay loop muted className="inverted-img">
                <source src={allegro_price_tracker_video} type="video/mp4" />
              </video>
            </div>
            <div className="project" id="p3">
              <video autoPlay loop muted className="imgg">
                <source src={natural_hazards_tracker} type="video/mp4" />
              </video>
              <div className="description-box">
                <div className="db">
                  <div className="featured-project">Featured Project</div>
                  <div className="project-name">Natural Hazards Tracker</div>
                  <div className="description">
                    A fullscreen map imported from google api with several
                    markers which locations were taken from NASA API tracking
                    recent natural hazards and events that were spotted by NASA
                    EONET system
                  </div>
                  <div className="languages">
                    React Typescript Sass Google API Nasa API
                  </div>
                  <div className="GitHubSVGDIV">
                    <a href="https://loliburta.github.io/Natural_Hazards_Map/">
                      <ExternalSVG className="ExternalSVG" />
                    </a>
                    <a href="https://github.com/Loliburta/Natural_Hazards_Map/tree/master">
                      <GitHubSVG className="GitHubSVG" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="github">
            <a href="https://github.com/Loliburta">
              <GitHubSVG className="github__svg" />
            </a>
            <div className="line"></div>
          </div>
        </>
      ) : (
        <ProjectsSectionPhone />
      )}
    </>
  );
};

export default ProjectsSection;
