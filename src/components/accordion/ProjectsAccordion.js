import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./content";

const ProjectsAccordion = () => {

return (
    <div className="accordion__container" id="projects">
        <h1 className="accordion__title">My Projects</h1>
        <div className="accordion">
            {accordionData.map(({id, title, tech, description, github, live}) => (
                <Accordion 
                    key={id}
                    title={title}
                    tech={tech}
                    description={description}
                    github={github}
                    live={live} />
            ))}
            </div>
        </div>

);
};

export default ProjectsAccordion;

