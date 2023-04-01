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
        <h2 className="acc__subtitle">{title}</h2>
        <h4 className="tech__title">{tech}</h4>
        <h2 className="acc__plus">{isActive ? "-" : "+"}</h2>
      </div>

      {isActive && (
        <div className="accordion__content">
          <p className="acc__body">{description}</p> <br />
          <br />
          {github && (
            <div className="acc__link">
              <div className="acc__body source">
                <Github fill="black" width={30} height={30} />
                <a href={github} target="_blank" rel="noreferrer">
                  {github}
                </a>
              </div>
            </div>
          )}
          <br />
          {live && (
            <div className="acc__link">
              <div className="acc__body source">
                <Linking fill="black" width={30} height={30} />
                <a href={live} target="_blank" rel="noreferrer">
                  {live}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
