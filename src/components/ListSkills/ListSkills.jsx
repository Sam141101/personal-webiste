import React from "react";
import "./listskills.css";

function ListSkills(skills) {
  console.log("skills", skills);
  return (
    <ul className="list_skills row g-4">
      {skills.skills.map((skill) => (
        <li key={skill.id} className="col-3 list-unstyled">
          <div className="skill d-flex align-items-center">
            <img src={skill.imageUrl} className="skill_img" alt="" />
            <div className="skill-info">
              <p className="skill-title">{skill.name}</p>
              <span>{skill.status}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListSkills;
