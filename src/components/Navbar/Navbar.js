import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaHamburger } from "react-icons/fa";
import { BsChevronDoubleUp } from "react-icons/bs";
import { GoPerson, GoRocket, GoTools } from "react-icons/go";

import "./navbar.scss";

const links = [
	{ to: "projects", label: "Projects", icon: <GoRocket size={40} color="#00C59B" /> },
	{ to: "skills", label: "Skills", icon: <GoTools size={40} color="#00C59B" /> },
	{ to: "about", label: "About", icon: <GoPerson size={40} color="#00C59B" /> }
]

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isWindowSizeSmall, setIsWindowSizeSmall] = useState(false);
	const [isAnimated, setIsAnimated] = useState(true);

	useEffect(() => {
		function handleResize() {
			setIsWindowSizeSmall(window.innerWidth < 768);
		}

		handleResize();
		window.addEventListener('resize', handleResize);

		// Clean up function
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [window.innerWidth])
	
	useEffect(() => {
		// Change navbar to symbols when scrolling
		const navbar = document.querySelector(".nav-content")

		function handleScroll() {
			const atTop = window.scrollY === 0;

			if (!isWindowSizeSmall) {
				if (atTop) {
					navbar.classList.remove("animated");
					setIsAnimated(false);
				} else {
					navbar.classList.add("animated");
					setIsAnimated(true);
				}
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
				{/* Show hamburger menu, when small, hide on desktop */}
				<div className="block md:hidden">
					<button onClick={toggleMenu} className="hamburger-menu text-white focus:outline-none absolute right-4 top-4 p-2">
						<FaHamburger color="#ebd2c1" size={30} />
					</button>
				</div>
				{/* Show menu on toggle */}
				<div className={`nav-content md:flex ${isOpen ? 'mt-12 flex-col md:flex-row bg-dark rounded-md' : 'hidden'}`}>
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
					{/* Display Chevron when toggle is open and go back up */}
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
					{/* Map through nav links */}
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
