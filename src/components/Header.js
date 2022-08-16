import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    
    
    
    
    return ( 
        <div className="navbar sticky">
            <div className="navbar__cont">
                <div className="navbar__home"><a className="navbar__link" href="#home"><FontAwesomeIcon icon={faHouse} size="1x" color="white"/></a></div>
            </div>
                <div className="navbar__links">
                <div className="navbar__pdf"><button className="navbar__button"><a className="navbar__link" href="KatjaZenkerCV2022.pdf" download="KatjaZenkerCV2022.pdf">Download CV</a></button></div>

                <div className="navbar__skills"><a className="navbar__link" href="#projects">Projects</a></div>
                <div className="navbar__skills"><a className="navbar__link" href="#skills">Skills</a></div>
                <div className="navbar__about"><a className="navbar__link" href="#about">About</a></div>
                <div className="navbar__contact"><a className="navbar__link" href="#contact">Contact</a></div>
            </div>
        </div>


     );
}
 
export default Header;