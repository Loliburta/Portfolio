import React from "react";
import { Element } from "react-scroll";
import weather_app_video from "../../Videos/weather_app_v2.mp4";
import allegro_price_tracker_video from "../../Videos/price_tracker_video_final.mp4";
import natural_hazards_tracker from "../../Videos/natural_hazards_tracker.mp4";
import { WindowSize } from "../smallComponents/WindowSize";

// SCSS
import "../../style.scss";

// SVG
import { ReactComponent as RectangleSVG } from "../../svgs/RectangleSVG.svg";
import { ReactComponent as GitHubSVG } from "../../svgs/GitHubSVG.svg";
import { ReactComponent as ExternalSVG } from "../../svgs/ExternalSVG.svg";
const ProjectsSectionPhone = () => {
  let width = WindowSize().width;

  return (
    <>
      <div className="projects-section">
        <div className="title" id="title-projects">
          <RectangleSVG className="rectangleSVG" />
          <Element id="projects" name="projects">
            <h2 className="big-text-projects">Projects</h2>
          </Element>
        </div>

        <div className="whole-project" id="p1">
          <video
            autoPlay
            loop
            muted
            className="phone-project-img"
            style={width <= 940 ? { opacity: "20%" } : null}
          >
            <source src={weather_app_video} type="video/mp4" />
          </video>
          <div className="text-container">
            <div className="featured-project-phone">Featured Project</div>
            <div className="project-name-phone">Weather App</div>
            <div className="project-description-phone">
              A nicer look at today's weather and forecast for the next few days
              with several animations and great looking backgrounds. Check out
              the weather of any place on earth using your native language.
            </div>
            <div className="languages-phone">
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
        <div className="whole-project" id="p2">
          <video
            autoPlay
            loop
            muted
            className="phone-project-img"
            style={width <= 940 ? { opacity: "20%" } : null}
          >
            <source src={allegro_price_tracker_video} type="video/mp4" />
          </video>
          <div className="text-container">
            <div className="featured-project-phone-i">Featured Project</div>
            <div className="project-name-phone-i"> Allegro Price Tracker</div>
            <div className="project-description-phone-i">
              A web app made for tracking the price of any product on Allegro
              (Polish version of Amazon) will notify you if the price gets lower
              than that specified by you, try it now and always pay the lowest
              price for your online shopping.
            </div>
            <div className="languages-phone-i">
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
        <div className="whole-project" id="p3">
          <video
            autoPlay
            loop
            muted
            className="phone-project-img"
            style={width <= 940 ? { opacity: "20%" } : null}
          >
            <source src={natural_hazards_tracker} type="video/mp4" />
          </video>
          <div className="text-container">
            <div className="featured-project-phone">Featured Project</div>
            <div className="project-name-phone">Comic Store Site</div>
            <div className="project-description-phone">
              A fullscreen map imported from google api with several markers
              which locations were taken from NASA API tracking recent natural
              hazards and events that were spotted by NASA EONET system
            </div>
            <div className="languages-phone">
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
      
    </>
  );
};

export default ProjectsSectionPhone;
