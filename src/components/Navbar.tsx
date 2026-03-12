import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
import { smoother, setSmoother } from "./utils/smoother";

const Navbar = () => {
  useEffect(() => {
    const s = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });
    setSmoother(s);

    s.scrollTop(0);
    s.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        if (section) {
          if (window.innerWidth > 1024 && smoother) {
            e.preventDefault();
            smoother.scrollTo(section, true, "top top");
          } else {
            // Mobile or smaller screens
            // Let the default href work, but maybe handle smoother if needed
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VD
        </a>
        <a
          href="mailto:vasukesavulu@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vasukesavulu@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
