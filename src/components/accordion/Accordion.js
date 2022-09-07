import React from "react";
import { useState } from "react";

const Accordion = ({ title, tech, description, github, live }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion__item">
            <div className="accordion__subtitle"
            onClick={() => setIsActive(!isActive)}>
                <h2>{title}</h2>
                <h2>{isActive ? "-" : "+" }</h2>
            </div>

            {isActive && 
            <div className="accordion__content">
                <p>{description}</p> <br />
                <h3>Tech Stack: {tech}</h3> <br /><br />
                <p><strong>Source Code: </strong>{github}</p> <br /><br />
                <a href={live}><button className="live__button">Click here to see live  </button></a>
                
                
            </div>
            }

        </div>
    )
}

export default Accordion;