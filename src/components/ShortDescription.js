import React from "react";
import { Link } from "react-scroll";

// COMPONENTS
import Programmer from "./smallComponents/Programmer";

// SCSS
import "../style.scss";

const ShortDescription = () => {
  return (
    <>
      <div className="radial">
        <div className="Container-ShortDesc-Svg">
          <div className="short-description">
            <h1 className="big-text-fd" id="big-text-fd">
              I'm a Front-end developer
            </h1>
            <h3 className="small-text-fd" id="small-text-fd">
              I specialize in building and designing websites.
              <br />
              Based in Warsaw, Poland.
            </h3>
            <div className="btn-div" id="btn-div">
              <Link to="contact" spy={true} smooth={true} duration={700}>
                <h2 className="button-portfolio">Get in touch</h2>
              </Link>
            </div>
          </div>
          <Programmer />
        </div>
      </div>
    </>
  );
};

export default ShortDescription;
