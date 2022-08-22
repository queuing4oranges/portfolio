import React from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function OneProject() {
    const { id } = useParams()
    const url = 'http://localhost:3001/projects'+id
    const { data: project, isPending, error} = useFetch(url)
    const history = useHistory()

    useEffect(() =>{
        if(error){
            setTimeout(() => {history.push('/')}, 2000)     //useHistory to send user back in case of error
        }
    },[error, history])



  return (
    <div>
        {isPending &&
            <div>Loading...</div>
        }
        {error && 
            <p>{error}</p>
        }
        {project &&
        (<div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src="" alt="screenshot UI" />
            <img src="" alt="screenshot code" />
            <p>{project.github}</p>
        
        </div>)
        }

    <h1>this is one project</h1>

    </div>
  )
}
