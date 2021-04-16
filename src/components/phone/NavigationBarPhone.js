import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import PDF from "../../Mateusz_Maranowski_CV.pdf";

// SCSS
import "../../style.scss";
import { ReactComponent as HamburgerSVG } from "../../svgs/HamburgerSVG.svg";

import { ReactComponent as CloseXSVG } from "../../svgs/CloseXSVG.svg";
import { ReactComponent as AboutSVG } from "../../svgs/AboutSVG.svg";
import { ReactComponent as ProjectsSVG } from "../../svgs/ProjectsSVG.svg";
import { ReactComponent as ContactSVG } from "../../svgs/ContactSVG.svg";
import { ReactComponent as ResumeSVG } from "../../svgs/ResumeSVG.svg";
import { WindowSize } from "../smallComponents/WindowSize";

const NavigationBarPhone = () => {
  const [sidebar, setSidebar] = useState(false);
  const menuRef = useRef();
  const showSidebar = () => setSidebar(!sidebar);
  let width = WindowSize().width;

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      // hide if clicked outside of phone menu
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setSidebar(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(menuRef);

  return (
    <>
      <div className="navbar">
        <div className="logo-phone" id="logo-phone">
          <h1 className="code-sign-p">{"<"}</h1>{" "}
          {width <= 445 ? (
            <h1 className="name-p">M.M</h1>
          ) : (
            <h1 className="name-p">Mateusz Maranowski</h1>
          )}{" "}
          <h1 className="code-sign-p">{"/>"}</h1>
        </div>
        <HamburgerSVG
          onClick={showSidebar}
          className="menu-bars"
          id="menu-bars"
        />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} ref={menuRef}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <CloseXSVG className="closeXSVG" />
          </li>
          <li className="nav-text">
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              duration={500}
              onClick={showSidebar}
            >
              <AboutSVG className="phone-menu-svg" />

              <span>About</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={showSidebar}
            >
              <ProjectsSVG className="phone-menu-svg" />

              <span>Projects</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={showSidebar}
            >
              <ContactSVG className="phone-menu-svg" />

              <span>Contact</span>
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <a href={PDF} without rel="noopener noreferrer" target="_blank">
              <ResumeSVG className="phone-menu-svg" />

              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBarPhone;
