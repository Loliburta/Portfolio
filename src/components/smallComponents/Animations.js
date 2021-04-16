import { useEffect } from "react";
import { gsap } from "gsap";

export const Animations = () => {
  useEffect(() => {
    //NavigationBar
    gsap.from(document.getElementById("logo"), {
      delay: 0.5,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(document.getElementById("e1"), {
      delay: 0.5,
      y: "-=20",
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(document.getElementById("e2"), {
      delay: 0.65,
      y: "-=20",
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(document.getElementById("e3"), {
      delay: 0.8,
      y: "-=20",
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(document.getElementById("e4"), {
      delay: 0.95,
      y: "-=20",
      opacity: 0,
      duration: 0.4,
    });
    //NavigationBarPhone
    gsap.from(document.getElementById("logo-phone"), {
      delay: 0.5,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(document.getElementById("menu-bars"), {
      delay: 0.5,
      opacity: 0,
      duration: 0.6,
    });
    //ShortDescription
    gsap.from(document.getElementById("big-text-fd"), {
      delay: 1,
      y: "+=20",
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(document.getElementById("small-text-fd"), {
      delay: 1.15,
      y: "+=20",
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(document.getElementById("btn-div"), {
      delay: 1.3,
      y: "+=20",
      opacity: 0,
      duration: 0.4,
    });
  }, []);
};
