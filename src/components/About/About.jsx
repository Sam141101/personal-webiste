import React, { useState } from "react";
import html from "../../assets/img/html.png";
import git from "../../assets/img/git.png";
import ListSkills from "../ListSkills/ListSkills";
import "./about.css";
import IntroduceYourself from "../IntroduceYourself/IntroduceYourself";

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

const introduce_yourself = {
  data: "Giới thiệu bản thân khi phỏng vấn được xem là một cách thức tạo dấu ấn khá quan trọng đối với bất kỳ một ứng viên nào. Có thể nói, việc giới thiệu bản thân khi phỏng vấn là một thách thức mà nhà tuyển dụng đặt ra cho mỗi ứng viên. Thoạt nghĩ, chúng ta tưởng chừng đây là một việc hết sức dẽ dàng. Tuy nhiên, để giới thiệu bản thân khi phỏng vấn hiệu quả lại là điều hoàn toàn không đơn giản",
};

const introduce_jpb = {
  data: "Front end là một phần của một website ở đó người dùng có thể tương tác để sử dụng, tất cả những gì mà bạn nhìn thấy trên một website bao gồm: font chữ, màu sắc, danh mục sản phẩm, menu, thanh trượt, v.v. đều là sự kết hợp hoàn hảo giữa HTML, CSS và Javascript.",
};

const data = [introduce_yourself, introduce_jpb];

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
    <article className="about container overflow-hidden">
      {/* introduce yourself */}
      <section className="about_yourself ">
        <IntroduceYourself data={data} />
      </section>

      {/* introduce skills */}
      <section className="about_skills">
        <div className="about_tagline text-start d-flex align-items-center fadein-bot">
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
      </section>
    </article>
  );
}

export default About;
