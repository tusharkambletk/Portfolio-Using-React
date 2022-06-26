import React from "react";
import "./ProductList.css";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.png";
import project3 from "../../img/project4.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">
          Create & Inspire. <span>It's my projects</span>
        </h1>
        <p className="pl-desc">
          Projects show your creative ideas and skills. They helped me in
          experience, training and skill development.
        </p>
      </div>
      <div className="pl-list">
        {/* First Project */}
        <div className="p">
          <div className="p-browser">
            <div className="dots">
              <div className="p-circle red"></div>
              <div className="p-circle yellow"></div>
              <div className="p-circle green"></div>
            </div>
            <div className="project-title">
              <p>Quiz App</p>
            </div>
          </div>
          <a href="https://tusharkamblequiz.netlify.app" target="_blank">
            <img src={project2} alt="project2" className="p-img" />
          </a>
          <div className="p-tags">
            <p>#HTML #CSS #JS #FrontEnd</p>
          </div>
        </div>
        {/* Second Project */}
        <div className="p">
          <div className="p-browser">
            <div className="dots">
              <div className="p-circle red"></div>
              <div className="p-circle yellow"></div>
              <div className="p-circle green"></div>
            </div>
            <div className="project-title">
              <p>Old Portfolio</p>
            </div>
          </div>
          <a href="https://tusharkamble.netlify.app" target="_blank">
            <img src={project3} alt="project3" className="p-img" />
          </a>
          <div className="p-tags">
            <p>#FrontEnd #WebDesign</p>
          </div>
        </div>
        {/* Third Project */}
        <div className="p">
          <div className="p-browser">
            <div className="dots">
              <div className="p-circle red"></div>
              <div className="p-circle yellow"></div>
              <div className="p-circle green"></div>
            </div>
            <div className="project-title">
              <p>Movieflix</p>
            </div>
          </div>
          <a
            href="https://github.com/tusharkambletk/movieflix"
            target="_blank"
            className="p-link"
          >
            <img src={project1} alt="project1" className="p-img" />
          </a>
          <div className="p-tags">
            <p>#ReactJS #API #FullStack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
