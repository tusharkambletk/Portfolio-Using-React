import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="exp">
      <div className="exp-header">
        <div className="exp-header-title">EXPERIENCE</div>
        <p className="exp-header-desc">
          Which help us to make informed decisions and to find the right path.
        </p>
      </div>
      <div className="exp-list">
        {/* Card-Number-1 */}
        <div className="exp-card technex" id="technex">
          <div className="exp-card-header">
            <h2 className="exp-card-title">Technex - 2022</h2>
            <p className="exp-card-post">Event Coordinator</p>
          </div>

          <div className="exp-card-info">
            <p className="p-text">
              Technex is the annual techno-management festival of the Indian
              Institute of Technology, Banaras Hindu University, Varanasi,
              India. Worked as event coordinator for Pixelate event of
              Technex'22.
            </p>
            <a
              href="https://drive.google.com/file/d/1YDlC9jNhUZMb9H2LthLFBiiLq2Tar36M/view?usp=sharing"
              target="_blank"
            >
              <button className="exp-button">VIEW CERTIFICATE</button>
            </a>
          </div>
        </div>

        {/* Card-Number-2 */}
        <div className="exp-card spardha" id="spardha">
          <div className="exp-card-header">
            <h2 className="exp-card-title">Spardha - 2021</h2>
            <p className="exp-card-post">Event and Ops Coordinator</p>
          </div>

          <div className="exp-card-info">
            <p className="p-text">
              Spardha is the annual Sports festival of IIT (BHU), Varanasi
              organized by the IIT gymkhana. Worked in event management team of
              spardha'21. It was very fascinating to work for such a grand sport
              fest.
            </p>
            <a
              href="https://drive.google.com/file/d/1HTGws4YhjgJMhq_yv8TnSsAa6fzPt2ps/view?usp=sharing"
              target="_blank"
            >
              <button className="exp-button">VIEW CERTIFICATE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
