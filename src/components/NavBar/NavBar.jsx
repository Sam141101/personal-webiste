import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className={`${scrolled ? "scrolled" : ""} navbar-container`}>
      <div className="container d-flex justify-content-between">
        <img className="navbar-logo" src={logo} alt="" />

        <div className="d-flex justify-content-center align-items-center">
          <ul className="d-flex align-items-center">
            <li className="nav-item">
              <a
                href="#home"
                className={`${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </a>
            </li>
          </ul>

          <div className="navbar-icon">
            <GitHubIcon />
          </div>

          <button className="navbar-toggler">Let's Connect</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
