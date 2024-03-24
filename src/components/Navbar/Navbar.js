import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaHamburger } from "react-icons/fa";
import { BsChevronDoubleUp } from "react-icons/bs";
import { GoPerson, GoRocket, GoTools } from "react-icons/go";

import "./navbar.scss";

const links = [
	{ to: "projects", label: "Projects", icon: <GoRocket size={20} color="#00C59B" /> },
	{ to: "skills", label: "Skills", icon: <GoTools size={20} color="#00C59B" /> },
	{ to: "about", label: "About", icon: <GoPerson size={20} color="#00C59B" /> }
]

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isWindowSizeSmall, setIsWindowSizeSmall] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

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
		function handleScroll() {
			const atTop = window.scrollY === 0;

			if (!isWindowSizeSmall) {
				if (atTop) {
					setIsAnimated(false);
				} else {
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
		<nav className="nav-container fixed top-0 z-50 w-full bg-transparent text-light md:px-20">
			<div className="flex justify-end items-center">
				{/* Show hamburger menu, when small, hide on desktop */}
				<div className="block md:hidden">
					<button onClick={toggleMenu} className="hamburger-menu text-white focus:outline-none absolute right-4 top-4 p-2">
						<FaHamburger color="#ebd2c1" size={30} />
					</button>
				</div>
				{/* Show menu on toggle */}
				<div className={`nav-content md:flex md:mt-4
					${isOpen ? 'flex-col w-full md:flex-row bg-dark rounded-md' : 'hidden'}
					${!isWindowSizeSmall && isAnimated ? 'animated' : '' }
				`}>
					<button className="cv-download bg-transparent text-accent text-xs py-2 px-4 rounded-md hover:bg-hover hover:text-accent">
						<a
							href="KatjaZenkerCV.pdf"
							target="_blank"
							rel="noreferrer"
							download="KatjaZenkerCV.pdf"
						>
							<p>Download CV</p>
						</a>
					</button>
					{/* Display Chevron only when toggle is open and go back up */}
					{isOpen ?
						<Link
							to="home"
							smooth={true}
							spy={true}
							activeClass="active"
							className={`flex items-center ml-2 py-2 hover:text-accent ${isOpen ? "text-xl ml-0 px-3" : "" }`}
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
							title={isAnimated ? link.label : ""}
							activeClass="active"
							className={`flex items-center ml-2 py-2 md:px-4 hover:text-accent
								${isOpen ? "text-xl ml-0 px-3" : "" }
								${!isWindowSizeSmall && isAnimated ? 'rotate-90' : ''}`
							}
							onClick={() => setIsOpen(false)}>
							{!isWindowSizeSmall && isAnimated ? <p className="rounded-full border border-accent p-3">{link.icon}</p> : <p>{link.label}</p>}
						</Link>
					))}
					
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
