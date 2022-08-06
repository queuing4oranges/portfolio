import React from 'react'
import { useFetch } from '../hooks/useFetch'

function Projects() {

    const url= "http://localhost:3000/projects"
    const {data: projects, isPending, error} = useFetch(url)

  return (
    <div>
        {projects &&
            projects.map(project =>(
                <div key={project.id} className="card">
                <p>{project.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Projects