import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaHamburger } from "react-icons/fa";
import { BsChevronDoubleUp } from "react-icons/bs";

import "./navbar.scss";

const links = [
	{ to: "projects", label: "Projects" },
	{ to: "skills", label: "Skills" },
	{ to: "about", label: "About" }
]

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isAtTop, setIsAtTop] = useState(false);
	
	useEffect(() => {
		// Change navbar to symbols when scrolling
		setIsScrolled(window.scrollY > 0);
		setIsAtTop(window.scrollY === 0);

		function handleScroll() {
			const scrolled = window.scrollY > 0;
			const atTop = window.scrollY === 0;
			const navbar = document.querySelector(".nav-content")

			if (scrolled) {
				navbar.classList.add("animated");
			} else if (atTop) {
				navbar.classList.remove("animated");
			}
		}

		window.addEventListener('scroll', handleScroll);

		// Clean up on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll)
		};
	},[]);

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
				<div className={`nav-content md:flex ${isOpen ? 'mt-12 flex-col md:flex-row bg-dark rounded-md' : 'hidden'} ${isOpen ? '' : ''}`}>
					<button className="cv-download bg-transparent text-accent text-xs py-2 px-4 rounded-full hover:bg-hover hover:text-accent">
						<a
							href="KatjaZenkerCV.pdf"
							target="_blank"
							rel="noreferrer"
							download="KatjaZenkerCV.pdf"
						>
							<p>Download CV</p>
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

					{links.map((link, index) => (
						<Link
							key={index}
							to={link.to}
							smooth={true}
							spy={true}
							activeClass="active"
							className={`flex items-center ml-8 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : "" }`}
							onClick={() => setIsOpen(false)}>
							<p>{link.label}</p>
						</Link>
					))}
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
