import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Header = () => {

    const dropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // window.onclick = function(event) {
    //     if (!event.target.matches("dropbtn")){
    //         var drop = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for (i=0; i<drop.length; i++){
    //             var openDropdown = drop[i];
    //             if (openDropdown.classList.contains("show")){
    //                 openDropdown.classList.remove("show")
    //             }
    //         }
    //     }
        
    // }
   
    
    return ( 
        <div className="navbar sticky">

            <div className="navbar__cont">
                <div className="navbar__home navbar__link"><Link to="home" smooth={true} spy={true}><FontAwesomeIcon icon={faHouse} size="1x" color="white"/></Link></div>
            </div>

            <div className="dropdown">

                <button onClick={()=>dropDown()} className="dropbtn">
                    <img className="hamburger__menu" src="../assets/hamburger_menu.png" alt="hamburger menu" />
                </button>


                <div className="dropdown-content" id="myDropdown">                   
                    <div className="navbar__link-home">
                        <Link 
                        to="home" 
                        smooth={true} 
                        spy={true}>Home
                        </Link></div>

                    <div className="navbar__link-projects">
                        <Link 
                        to="projects" 
                        smooth={true} 
                        spy={true}>Projects
                        </Link></div>

                    <div className="navbar__link-skills">
                        <Link 
                        to="skills" 
                        smooth={true} 
                        spy={true}>Skills
                        </Link></div>

                    <div className="navbar__link-about">
                        <Link 
                        to="about" 
                        smooth={true} 
                        spy={true}>About
                        </Link></div>
                </div>

            </div>
            

                <div className="navbar__links">
                    
                <div className="navbar__link-pdf">
                    <button className="navbar__button">
                        <a 
                            className="navbar__link" 
                            href="KatjaZenkerCV2022.pdf" 
                            target="_blank" 
                            rel="noreferrer" 
                            download="KatjaZenkerCV2022.pdf">Download CV
                        </a>
                    </button>
                </div>

                <div className="navbar__link-projects"><Link to="projects" smooth={true} spy={true}>Projects</Link></div>
                <div className="navbar__link-skills"><Link to="skills" smooth={true} spy={true}>Skills</Link></div>
                <div className="navbar__link-about"><Link to="about" smooth={true} spy={true}>About</Link></div>

            </div>
        </div>


     );
}
 
export default Header;