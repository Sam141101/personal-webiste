import React, { useState } from "react";
import html from "../../assets/img/html.png";
import git from "../../assets/img/git.png";
import ListSkills from "../ListSkills/ListSkills";
import "./about.css";

const techs = [
  {
    id: 1,
    name: "HTML",
    imageUrl: html,
    status: "Version Control",
  },
  {
    id: 2,
    name: "CSS",
    imageUrl: html,
    status: "Version Control",
  },

  {
    id: 4,
    name: "Javascript",
    imageUrl: html,
    status: "Version Control",
  },
  {
    id: 7,
    name: "VueJS",
    imageUrl: html,
    status: "Version Control",
  },
  {
    id: 8,
    name: "Pytgon",
    imageUrl: html,
    status: "Version Control",
  },
  {
    id: 31,
    name: "Java",
    imageUrl: html,
    status: "Version Control",
  },
];

const tools = [
  {
    id: 1,
    name: "HTML",
    imageUrl: git,
  },
  {
    id: 2,
    name: "CSS",
    imageUrl: git,
  },

  {
    id: 4,
    name: "Javascript",
    imageUrl: git,
  },
  {
    id: 7,
    name: "VueJS",
    imageUrl: git,
  },
  {
    id: 8,
    name: "Pytgon",
    imageUrl: git,
  },
  {
    id: 31,
    name: "Java",
    imageUrl: git,
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("techs");

  const handleClick = (skill) => {
    if (skill === activeTab) {
      return;
    } else {
      setActiveTab(skill);
    }
  };

  return (
    <section className="about">
      <div className="about_me">about me</div>
      <div className="about_skills container overflow-hidden">
        <div className="about_tagline text-start d-flex align-items-center">
          <div className="cross-bar"></div>&nbsp; Skills
        </div>
        <ul className="d-flex list-unstyled">
          <li
            className={`btn-skill tech ${
              activeTab === "techs" ? "active" : ""
            }`}
            onClick={() => handleClick("techs")}
          >
            Techs
          </li>
          <li
            className={`btn-skill tool ${
              activeTab === "tools" ? "active" : ""
            }`}
            onClick={() => handleClick("tools")}
          >
            Tools
          </li>
        </ul>

        <div className="about_list">
          {activeTab === "techs" ? (
            <ListSkills skills={techs} />
          ) : (
            <ListSkills skills={tools} />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
