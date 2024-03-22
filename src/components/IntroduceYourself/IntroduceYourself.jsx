import React from "react";
import "./introduceYourself.css";
import image from "../../assets/img/css.png";
function IntroduceYourself({ data }) {
  console.log(data);
  return (
    <div className="frame_introduce">
      <header className="header_title fadein-bot">
        About me
        <div className="cross-bar"></div>
      </header>
      <div className="row introduce-content">
        <div className="col-5">
          <div className="frame-img">
            <img className="img-yourself pict fadein-up" src={image} alt="" />
          </div>
        </div>
        <div className="col-7">
          <div className="fadeins-1 fadein-left">{data[0].data}</div>
          <div className="fadeins-2 fadein-left">{data[1].data}</div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceYourself;
