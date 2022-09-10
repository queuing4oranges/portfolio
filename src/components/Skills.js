import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {

    return ( 
    <>
    <h1 className="skills__title" id="skills">Skills</h1>
    <div className="skills__container" >
            

        <div className="cont__top">
            <div className="tech__container">
                <h2 className="skills__subtitle">Tech Stack</h2>
                <ProgressBar 
                now={90} 
                label="HTML"/> 

                <ProgressBar 
                now={90} 
                label="CSS/SASS"/>

                <ProgressBar 
                now={70} 
                label="JavaScript"/>

                <ProgressBar 
                now={70} 
                label="PHP"/>

                <ProgressBar 
                now={80} 
                label="Git"/>

                <ProgressBar 
                now={70} 
                label="MySQL"/>

                <ProgressBar 
                now={80} 
                label="React"/>

                <ProgressBar 
                now={60} 
                label="Laravel"/>

            </div>

            
        <div className="study__container">

            <h2 className="skills__subtitle">Courses taken</h2>

                <h3>Coding Bootcamp Praha</h3>
                <ul>
                    <li className="li__item">A fullstack web development coding bootcamp. 12-week fulltime programme.</li>
                </ul> <br />
                
                <h3>freeCodeCamp</h3>
                  <ul>
                    <li className="li__item">Basic HTML and HTML5</li>
                    <li className="li__item">Basic CSS</li>
                    <li className="li__item">Applied Visual Design</li>
                    <li className="li__item">Applied Accessibility</li>
                    <li className="li__item">CSS Flexbox</li>
                    <li className="li__item">Basic JavaScript</li>
                </ul>

                <h3>Udemy</h3>
                <ul>
                    <li className="li__item">Complete Web Design: from Figma to Webflow</li>
                    <li className="li__item">100 Days of Code</li>
                </ul>
                
                <h3>The Net Ninja</h3>
                <ul>
                    <li className="li__item">Build Websites with React &#038; Firebase</li>
                </ul>

          
        </div>
        </div>

        <div className="cont__bottom">
            <div className="lang__container">
            <h2>Languages</h2>
            <ul>
                <li className="li__item">German / native || English / C1 || Czech / B1 || French A1</li>
 
            </ul>
            </div>
        </div>
    </div>

</>
     );
}
 
export default Skills;

// label={`${now}%`}