import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { VscGithub } from "react-icons/vsc";

function Projects() {

    const url= "http://localhost:3000/projects"
    const {data: projects, isPending, error} = useFetch(url)

  return (
    <div className="projects__container" id='projects'>

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
                    <li className="li__item">{project.description}</li> <br />
                    <li className="li__item">Tech Stack: {project.tech}</li> <br />
                    <li className="li__item read">Read more...</li>
                  </ul>
                  <div className="github">
                    <div className="git__logo"><VscGithub className="git__logo"/></div>
                    
                    <div className="git__link"><a rel="noopener" target="_blank" href={project.github}>{project.github}</a></div>
                  </div>
                
                </div>
            ))
        }
      </div>

       
    </div>
  )
}

export default Projects