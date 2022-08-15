import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
    const now= 60;


    return ( 
    <>
    <h1 className="skills__title-big">Skills</h1>
        <div className="skills__container" id="skills">
            

            <div className="tech__container">
                <h2 className="skills__title">Tech Stack</h2>
                <ProgressBar 
                now={80} 
                label="HTML"/> <br></br>

                <ProgressBar 
                now={80} 
                label="CSS/SCSS"/><br></br>

                <ProgressBar 
                now={70} 
                label="JavaScript"/><br></br>

                <ProgressBar 
                now={70} 
                label="PHP"/><br></br>

                <ProgressBar 
                now={70} 
                label="Git"/><br></br>

                <ProgressBar 
                now={70} 
                label="MySQL"/><br></br>

                <ProgressBar 
                now={70} 
                label="React"/><br></br>

                <ProgressBar 
                now={60} 
                label="Laravel"/><br></br>
            </div>

            <div className="language__container">
                <h2 className="skills__title">Languages</h2>
                <ProgressBar 
                className="language-en"
                now={100} 
                label="German"/><br></br>
                
                <ProgressBar 
                className="language-en"
                now={95} 
                label="English"/><br></br>
                
                <ProgressBar 
                className="language-en"
                now={60} 
                label="Czech"/><br></br>
                
                <ProgressBar 
                className="language-en"
                now={10} 
                label="French"/><br></br>
            </div>

        </div>
</>
     );
}
 
export default Skills;

// label={`${now}%`}