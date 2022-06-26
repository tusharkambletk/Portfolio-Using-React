import React from "react";
import "./About.css";
import Award from "../../img/award.png";

const img =
  "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img} alt="aboutImage" className="a-image"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">.About( )</h1>
        <p className="a-sub">
          I believe in having good time while doing what I love. I am very
          passinate to complete my work accurately in time.
        </p>
        <p className="a-desc">
          I enjoy turning complex problems into simple, baeutiful and intutive
          interface designs. I am interested in doing Web Development and
          Competitive Programming. I have also tried my hands on UI Designing
          and designed many beautiful screens. When I am not coding, you'll find
          me on the sports ground or Hockey court shooting hoops.
        </p>
      </div>
    </div>
  );
};

export default About;
