import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    
    
    
    
    return ( 
        <div className="navbar">
            <div className="navbar__cont">
                <div className="navbar__home"><a className="navbar__link" href="#"><FontAwesomeIcon icon={faHouse} size="1x" color="white"/></a></div>
            </div>
                <div className="navbar__links">
                <div className="navbar__pdf"><a className="navbar__link" href="CV2022.pdf" download="CV2022.pdf">Download CV</a></div>
                <div className="navbar__skills"><a className="navbar__link" href="#">Skills</a></div>
                <div className="navbar__about"><a className="navbar__link" href="#">About</a></div>
                <div className="navbar__contact"><a className="navbar__link" href="#">Contact</a></div>
            </div>
        </div>


     );
}
 
export default Header;