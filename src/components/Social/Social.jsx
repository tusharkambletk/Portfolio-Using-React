import React from "react";
import "./Social.css";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import git from "../../img/git.png";
import facebook from "../../img/facebok.png";

const Education = () => {
  return (
    <div className="sm-container">
      <div className="sm">
        <div className="sm-header">
          <div className="sm-title">Social Media</div>
        </div>
        <div className="sm-list">
          {/* Card-1 */}
          <div className="sm-card one">
            <a href="https://www.instagram.com/t_ushar_k/" target="_blank">
              <div className="sm-card-strip"></div>
              <div className="sm-main">
                <div className="sm-content">
                  <img className="sm-img instagram" src={instagram} />
                  <div className="sm-content-info">
                    <h2>Instagram</h2>
                    <p p-text>Follow Me</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Card-2 */}
          <div className="sm-card two">
            <a
              href="https://www.linkedin.com/in/tushar-kamble-734a58204/"
              target="_blank"
            >
              <div className="sm-card-strip"></div>
              <div className="sm-main">
                <div className="sm-content">
                  <img className="sm-img linkedin" src={linkedin} />
                  <div className="sm-content-info">
                    <h2>LinkedIn</h2>
                    <p p-text>Let's Connect</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Card-3 */}
          <div className="sm-card three">
            <a href="https://github.com/tusharkambletk" target="_blank">
              <div className="sm-card-strip"></div>
              <div className="sm-main">
                <div className="sm-content">
                  <img className="sm-img git" src={git} />
                  <div className="sm-content-info">
                    <h2>GitHub</h2>
                    <p p-text>Tech Connect</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Card-4 */}
          <div className="sm-card four">
            <a
              href="https://www.facebook.com/sanket.kamble.169067/"
              target="_blank"
            >
              <div className="sm-card-strip"></div>
              <div className="sm-main">
                <div className="sm-content">
                  <img className="sm-img facebook" src={facebook} />
                  <div className="sm-content-info">
                    <h2>Facebook</h2>
                    <p p-text>Lets Collaborate</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
