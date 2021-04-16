import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerAnimations = () => {
  useEffect(() => {
    // AboutMe
    gsap.from(".title-about-me", {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: ".title-about-me",
        start: "0% 85%",
      },
    });
    gsap.from(".medium-text", {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: ".medium-text",
        start: "0% 85%",
      },
    });
    gsap.from(".small-text", {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: ".small-text",
        start: "0% 85%",
      },
    });

    // ProjectsSection
    gsap.from(document.getElementById("title-projects"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("title-projects"),
        start: "0% 85%",
      },
    });
    gsap.from(document.getElementById("p1"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("p1"),
        start: "0% 85%",
      },
    });
    gsap.from(document.getElementById("p2"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("p2"),
        start: "0% 85%",
      },
    });
    gsap.from(document.getElementById("p3"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("p3"),
        start: "0% 85%",
      },
    });
    
    // ContactSection
    gsap.from(document.getElementById("title-contact"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("title-contact"),
        start: "0% 85%",
      },
    });
    gsap.from(document.getElementById("contact-description"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("contact-description"),
        start: "0% 85%",
      },
    });
    gsap.from(document.getElementById("contact-form"), {
      y: "+=50",
      opacity: 0,
      scrollTrigger: {
        trigger: document.getElementById("contact-form"),
        start: "0% 85%",
      },
    });
  }, []);
};
