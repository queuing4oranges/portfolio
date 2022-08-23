import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


function Projects() {

    const url= "http://localhost:3000/projects"
    const {data: projects, isPending, error} = useFetch(url)

  return (
    <div className="projects__container" id="projects">

    <h1 className="projects__title">Projects</h1>

      <div className="cards__cont">
        
        
        {isPending && 
            <div>Loading...</div>}
        {error &&
            <div>{error}</div>}

        {projects &&
            projects.map(project =>(
                <div key={project.id} className="card">
                  <h3 className="cards__title">{project.title}</h3>
                  <ul className="ul__item">
                    <li className="li__item">{project.subtitle}</li> <br />
                    <li className="li__item">Tech Stack: {project.tech}</li> <br />
                    <li className="li__item">
                      <Link target="_blank" className="read" to={`/projects/${project.id}`}>Read more ...</Link>
                      </li>
                  </ul>
                  </div>

            ))
        }
      </div>

       
    </div>
  )
}

export default Projects