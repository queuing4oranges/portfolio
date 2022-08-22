import React from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function OneProject() {

const { id } = useParams() 
const url = 'http://localhost:3000/projects/'+id
const { data: project, isPending, error } = useFetch(url)


return (
    <div>
        {isPending && <div>Is loading...</div>}
        {error && <div>{error}</div>}
        {project && 
            <div>
                <h2>{project.title}</h2>
            </div>
        }
    </div>
)


}

//     const history = useHistory()

//     useEffect(() =>{
//         if(error){
//             setTimeout(() => {history.push('/')}, 2000)     //useHistory to send user back in case of error
//         }
//     },[error, history])



