import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
    const now= 60;


    return ( 
        <div className="skills__container">
            <h1>Skills</h1>
            <ProgressBar 
            now={80} 
            label="HTML"
            /> <br></br>

            <ProgressBar 
            now={80} 
            label="CSS/SCSS"
            /><br></br>

            <ProgressBar 
            now={70} 
            label="JavaScript"
            /><br></br>

            <ProgressBar 
            now={70} 
            label="PHP"
            /><br></br>

            <ProgressBar 
            now={70} 
            label="Git"
            /><br></br>

            <ProgressBar 
            now={70} 
            label="MySQL"
            /><br></br>

            <ProgressBar 
            now={70} 
            label="React"
            /><br></br>

            <ProgressBar 
            now={60} 
            label="Laravel"
            /><br></br>


        </div>

     );
}
 
export default Skills;

// label={`${now}%`}