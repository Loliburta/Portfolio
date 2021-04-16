import React from "react";
import ReactDom from "react-dom";

// COMPONENTS
import NavigationBar from "./components/NavigationBar";
import ShortDescription from "./components/ShortDescription";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

//Animations
import { Animations } from "./components/smallComponents/Animations";
import { ScrollTriggerAnimations } from "./components/smallComponents/ScrollTriggerAnimations";

// SCSS
import "./style.scss";

const Main = (props) => {
  Animations();
  ScrollTriggerAnimations();
  return (
    <>
      <NavigationBar />
      <ShortDescription />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

ReactDom.render(<Main />, document.getElementById("root"));
