import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Header = () => {
    
    
    
    
    return ( 
        <div className="navbar sticky">
            <div className="navbar__cont">
                <div className="navbar__home navbar__link"><Link to="home" smooth={true} spy={true}><FontAwesomeIcon icon={faHouse} size="1x" color="white"/></Link></div>
            </div>

            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

                <div className="navbar__links">
                    
                <div className="navbar__pdf">
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

                <div className="navbar__skills navbar__link"><Link to="projects" smooth={true} spy={true}>Projects</Link></div>
                <div className="navbar__skills navbar__link"><Link to="skills" smooth={true} spy={true}>Skills</Link></div>
                <div className="navbar__about navbar__link"><Link to="about" smooth={true} spy={true}>About</Link></div>

            </div>
        </div>


     );
}
 
export default Header;