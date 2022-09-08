import React from "react";
import { useState } from "react";

const Accordion = ({ id, title, tech, description, github, live }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        
        <div className="accordion__item">
            <div className="accordion__subtitle"
            onClick={() => setIsActive(!isActive)}>
                <h2>{title}</h2>
                <h2>{isActive ? "-" : "+" }</h2>
            </div> 

            {isActive && 
            <div className="accordion__content" >

                <p className="acc__body">{description}</p> <br />
                <h3 className="acc__body">Tech Stack: {tech}</h3> <br />
                <p className="acc__body"><strong>Source Code: </strong>{github}</p> <br />
                <a className="acc__body" href={live}><button className="live__button">Click here to see live  </button></a>
    
                
            </div>
            }

        </div>
    )
}

export default Accordion;