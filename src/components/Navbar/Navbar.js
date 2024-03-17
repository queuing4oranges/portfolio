import { useState } from "react";
import { Link } from "react-scroll";
import { FaHamburger } from "react-icons/fa";
import { BsChevronDoubleUp } from "react-icons/bs";

import "./navbar.scss";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="nav-container fixed top-0 z-50 w-full bg-transparent text-light py-4 px-6 md:px-40">
			<div className="flex justify-end items-center">
				<div className="block md:hidden">
					<button onClick={toggleMenu} className="hamburger-menu text-white focus:outline-none absolute right-4 top-4 p-2">
						<FaHamburger color="#ebd2c1" size={30} />
					</button>
				</div>
				<div className={`md:flex ${isOpen ? 'mt-12 flex-col md:flex-row' : 'hidden'} ${isOpen ? 'bg-dark rounded-md' : ''}`}>
					<button className="cv-download bg-transparent text-accent text-xs py-2 px-4 rounded-full hover:bg-hover hover:text-accent">
						<a
							href="KatjaZenkerCV.pdf"
							target="_blank"
							rel="noreferrer"
							download="KatjaZenkerCV.pdf"
						>
							Download CV
						</a>
					</button>
					{isOpen ?
						<Link
							to="home"
							smooth={true}
							spy={true}
							activeClass="active"
							className={`flex items-center ml-8 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : "" }`}
							onClick={() => setIsOpen(false)}>
							<BsChevronDoubleUp size={30} />
						</Link>
					: null
					}

					<Link 
						to="projects" 
						smooth={true} 
						spy={true} 
						activeClass="active" 
						className={`flex items-center ml-8 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : "" }`}
						onClick={() => setIsOpen(false)}>
						Projects
					</Link>
					
					<Link 
						to="skills" 
						smooth={true} 
						spy={true} 
						activeClass="active" 
						className={`flex items-center ml-8 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : ""}`}
						onClick={() => setIsOpen(false)}>
						Skills
					</Link>
					
					<Link 
						to="about" 
						smooth={true} 
						spy={true} 
						activeClass="active" 
						className={`flex items-center ml-8 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : ""}`} 
						onClick={() => setIsOpen(false)}>
						About
					</Link>
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

// {/* <div>
// 					{/* this is the linke to the top */}
// <Link to="home" smooth={true} spy={true}>
// 	{/* <BsFillHouseFill color="#ebd2c1" size={30}/> */}
// </Link>
// 				</div >