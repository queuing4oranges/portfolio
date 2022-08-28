import React from "react";


function Projects() {

    
    function toggleClass(event){
        var element = event.target;
        element.classList.toggle("big")
    }


    return (
    <div className="projects__container" id="projects">

    <h1 className="projects__title">Projects</h1>

    <div className="cards__container">

                {/* card1 */}
                <div className="card">  

                    <div className="card__content">
                        <h3 className="cards__title">Portfolio Landing Page</h3>
                        <ul className="ul__item">
                            <li className="li__item">The website you are looking at right now.</li>
                            <li className="li__item">Tech Stack: JavaScript, React, HTML, SCSS</li>
                            <li className="li__item github__item"><a className="github__item" href="https://github.com/queuing4oranges/portfolio">https://github.com/queuing4oranges/portfolio</a></li>
                        </ul>
                    </div>

                    <div className="pics__content">
                        <img
                        onClick={toggleClass}
                        className="screenshots"
                        src="../assets/portfolio_screen1.PNG" 
                        alt="screenshot landing page" />

                        <img 
                        onClick={toggleClass}
                        className="screenshots" 
                        src="../assets/portfolio_screen2.PNG" 
                        alt="screenshot landing page" />

                        <img
                        onClick={toggleClass} 
                        className="screenshots"
                        src="../assets/portfolio_code1.PNG" 
                        alt="screenshot code for landing page" />

                        <img
                        onClick={toggleClass}
                        className="screenshots"
                        src="../assets/portfolio_code2.PNG" 
                        alt="screenshot code for landing page" />
                    </div>
                </div>

                {/* card2 */}
                <div className="card">

                    <div className="card__content">
                        <h3 className="cards__title">Lesbotoč Website</h3>
                        <ul className="ul__item">
                            <li className="li__item">Final Team-Project of the Web Development Bootcamp 2022.</li>
                            <li className="li__item">Tech Stack: JavaScript, React, PHP, Laravel, SCSS</li>
                            <li className="li__item github__item"><a className="github__item" href="https://github.com/RuxCavescu/Lesbotoc">https://github.com/RuxCavescu/Lesbotoc</a></li>
                        </ul>
                    </div>
      
                    <div className="pics__content">
                        <img
                        onClick={toggleClass} 
                        className="screenshots" 
                        src="../assets/portfolio_screen3.PNG" 
                        alt="screenshot lesbotoc" />

                        <img
                        onClick={toggleClass} 
                        className="screenshots" 
                        src="../assets/portfolio_screen4.PNG" 
                        alt="screenshot lesbotoc" />

                        <img
                        onClick={toggleClass} 
                        className="screenshots"
                        src="../assets/portfolio_code3.PNG" 
                        alt="screenshot code for lesbotoc" />

                        <img
                        onClick={toggleClass}
                        className="screenshots"
                        src="../assets/portfolio_code4.PNG" 
                        alt="screenshot code for lesbotoc" />
                    </div>
                </div>

                {/* card3 */}
                <div className="card">
                    <div className="card__content">
                            <h3 className="cards__title">Memory</h3>
                            <ul className="ul__item">
                                <li className="li__item">A traditional memory game.</li>
                                <li className="li__item">Tech Stack: JavaScript, React, HTML, CSS</li>
                                <li className="li__item github__item"><a className="github__item" href="https://github.com/queuing4oranges/magic-memory">https://github.com/queuing4oranges/magic-memory</a></li>
                            </ul>
                            <a className="live__button" href="https://memory.itisgoodtohave.me/"><button className="live__button">Click here to see live  </button></a>
                    </div>

                    <div className="pics__content">
                        <img
                        onClick={toggleClass} 
                        className="screenshots" 
                        src="../assets/portfolio_screen7.PNG" 
                        alt="screenshot magic memory" />

                        <img
                        onClick={toggleClass} 
                        className="screenshots" 
                        src="../assets/portfolio_screen8.PNG" 
                        alt="screenshot magic memory" />

                        <img
                        onClick={toggleClass} 
                        className="screenshots"
                        src="../assets/portfolio_code5.PNG" 
                        alt="screenshot code for memory" />

                        <img
                        onClick={toggleClass}
                        className="screenshots"
                        src="../assets/portfolio_code6.PNG" 
                        alt="screenshot code for memory" />
                    </div>


                </div>

                
        </div>

        <a className="button__a" href="https://github.com/queuing4oranges?tab=repositories"><button className="button white">More on Github...  </button></a>
       
        
    </div>


  )
}

export default Projects