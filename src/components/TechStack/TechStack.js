import React, { useState, useEffect } from 'react';
import { technologies } from "./TechStackData";

import "./techstack.scss";

export default function TechStack() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [isMobile, setIsMobile] = useState(windowSize <= 600);


	useEffect(() => {
		const handleResize = () => {
			const newWidth = (window.innerWidth); // Prevent race condition
			setWindowSize(newWidth);
			setIsMobile(newWidth <= 600);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);

	},[windowSize]);

	return (
		<section id="tech" className = "bg-dark text-light px-4 py-10 md:px-40 md:py-20">
			<h1 className='text-xl md:text-3xl'>
				Tech Stack
			</h1>
			<br />

			<div className="techstack-container grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
				{technologies.map((tech, idx) => (
					<div key={idx} className={`tech-card sm:w-28 sm:h-38 md:w-32 md:h-44  flex flex-col items-center p-5 justify-between bg-light rounded-md ${isMobile ? "p-5" : "pt-5 pb-5" }`}>
						<tech.icon
							height={isMobile ? 70 : 80}
							width={isMobile ? 70 : 80}
						/>
					<p className={`text-center text-dark ${isMobile ? "text-sm mt-3" : ""}`}>{tech.title}</p>
					</div>
				))}
			</div>
		</section>
	)
}
