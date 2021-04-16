import React from "react";
import ContactForms from "./smallComponents/ContactForms";
import { Element } from "react-scroll";
import { WindowSize } from "./smallComponents/WindowSize";

// SCSS
import "../style.scss";


// SVG
import { ReactComponent as BuildingsPhoneSVG } from "../svgs/BuildingsPhoneSVG.svg";
import { ReactComponent as BuildingsSVG } from "../svgs/BuildingsSVG.svg";
import { ReactComponent as BuildingsBigSVG } from "../svgs/BuildingsBigSVG.svg";
import { ReactComponent as RectangleSVG } from "../svgs/RectangleSVG.svg";
import { ReactComponent as LineSVG } from "../svgs/LineSVG.svg";



const ContactSection = () => {
  let width = WindowSize().width;

  return (
    <>
      <div className="Contact-section">
        {width > 2000 ? (
          <BuildingsBigSVG className="UpBuildingsSVG" />
        ) : width < 800 ? (
          <BuildingsPhoneSVG className="UpBuildingsSVG" />
        ) : (
          <BuildingsSVG className="UpBuildingsSVG" />
        )}
        <div className="contact-textdiv">
          <div className="title-contact" id="title-contact">
            <RectangleSVG className="rectangleSVG" />
            <Element id="contact" name="contact">
              <h2 className="big-text-contact">Contact</h2>
            </Element>
            <LineSVG className="lineSVG" />
          </div>
          <div className="contact-description" id="contact-description">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the awesome form below or send an email to{" "}
            <b className="bold-mail">Maranowski.Mateusz@gmail.com</b>
          </div>
          <ContactForms />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
