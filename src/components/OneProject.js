import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { VscGithub } from "react-icons/vsc";

export default function OneProject() {

const { id } = useParams() 
const url = "http://localhost:3000/projects/"+id
const { data: project, isPending, error } = useFetch(url)

const openPic = () => {
    var element = document.getElementById("picOne");
    element.classList.toggle("pic-big")

}



return (

    <div className="oneproject__container">
        {isPending && <div>Is loading...</div>}
        {error && <div>{error}</div>}
        {project && 

        <div className="data__container">
            <div className="info__container">
                <h2 className="oneprojects__title">{project.title}</h2>
                {/* <h3 className="projects__subtitle">{project.subtitle}</h3> */}
                <h4>Tech Stack: {project.tech}</h4>
            </div>

            <div className="text__images"> 
                <p className="text__cont">{project.description}</p> 
            

                <div className="images__cont">
                    <img 
                    onClick={() =>openPic()} 
                    className="image__screen" 
                    id="picOne"
                    src={project.screenshot_one} 
                    alt={project.screenshot_one} />


                    <img className="image__screen" src={project.screenshot_two} alt={project.screenshot_two} />
                    <img className="image__screen" src={project.code_one} alt={project.code_one} />
                    <img className="image__screen" src={project.code_two} alt={project.code_two} />
                </div>              
            </div>



            <div className="github__container">
                <div className="git__logo"><VscGithub className="git__logo"/></div>
                <div className="git__link"><a rel="noreferrer" target="_blank" href={project.github}>{project.github}</a></div>
            </div>
        </div>  
        }
    </div>   
)
    }