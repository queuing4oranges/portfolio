import React from "react";
import { useState } from "react";
import Github from "../../icons/Github";
import Linking from "../../icons/Linking";

const Accordion = ({ id, title, tech, description, github, live }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div
        className="accordion__subtitle"
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className="acc__subtitle">{title}</h4>
        <h5 className="tech__title">{tech}</h5>
        <h2 className="acc__plus">{isActive ? "-" : "+"}</h2>
      </div>

      {isActive && (
        <div className="accordion__content">
          <p className="acc__body">{description}</p> <br />
          <br />
          <div className="acc__link">
            {github && (
              <div className="acc__body source">
                <Github fill="black" width={30} height={30} />
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="btn btn-info">See Code</button>
                </a>
              </div>
            )}

            {live && (
              <div className="acc__body source">
                <Linking fill="black" width={30} height={30} />
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="btn btn-info"> See Live</button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
