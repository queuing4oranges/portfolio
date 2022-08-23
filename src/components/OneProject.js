import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { VscGithub } from "react-icons/vsc";

export default function OneProject() {

const { id } = useParams() 
const url = "http://localhost:3000/projects/"+id
const { data: project, isPending, error } = useFetch(url)

const openPicOne = () => {
    var picOne = document.getElementById("picOne");
    picOne.classList.toggle("pic-big");
}

const openPicTwo = () => {
    var picOne = document.getElementById("picTwo");
    picOne.classList.toggle("pic-big");  
}

const openPicThree = () => {
    var picOne = document.getElementById("picThree");
    picOne.classList.toggle("pic-big");  
}

const openPicFour = () => {
    var picOne = document.getElementById("picFour");
    picOne.classList.toggle("pic-big");  
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
                    onClick={() =>openPicOne()} 
                    className="image__screen" 
                    id="picOne"
                    src={project.screenshot_one} 
                    alt={project.screenshot_one} />


                    <img
                    onClick={() =>openPicTwo()}  
                    className="image__screen" 
                    id="picTwo"
                    src={project.screenshot_two} 
                    alt={project.screenshot_two} />

                    <img 
                    onClick={() =>openPicThree()} 
                    className="image__screen"
                    id="picThree" 
                    src={project.code_one} 
                    alt={project.code_one} />

                    <img 
                    onClick={() =>openPicFour()} 
                    className="image__screen" 
                    id="picFour"
                    src={project.code_two} 
                    alt={project.code_two} />
                </div>              
            </div>
            
            <div className="live__cont">
                <button className="navbar__button "><a className="navbar__link" rel="noreferrer" target="_blank" href={project.live}>Click to see live</a></button>
            </div>


            <div className="github">
                <div className="git__logo"><VscGithub className="git__logo"/></div>
                <div className="git__link center"><a className="git__link center" rel="noreferrer" target="_blank" href={project.github}>{project.github}</a></div>
            </div>
        </div>  
        }
    </div>   
)
    }