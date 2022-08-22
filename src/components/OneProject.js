import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function OneProject() {

const { id } = useParams() 
const url = 'http://localhost:3000/projects/'+id
const { data: project, isPending, error } = useFetch(url)


return (
    <div className='oneproject__container'>
        {isPending && <div>Is loading...</div>}
        {error && <div>{error}</div>}
        {project && 
            <div>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <h4>{project.tech}</h4>
                <p>{project.description}</p>
                <img className="image__screen" src={project.screenshot_one} alt={project.screenshot_one} />
                <img className="image__screen" src={project.screenshot_two} alt={project.screenshot_two} />
                <img className="image__screen" src={project.code_one} alt={project.code_one} />
                <img className="image__screen" src={project.code_two} alt={project.code_two} />              
            </div>
        }

    </div>
)

}

                  {/* <div className="github">
                    <div className="git__logo"><VscGithub className="git__logo"/></div>
                    
                    <div className="git__link"><a rel="noreferrer" target="_blank" href={project.github}>{project.github}</a></div>

                  </div> */}


// {`/projects/${project.id}`}