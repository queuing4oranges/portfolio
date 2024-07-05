import { useRef, useEffect, useState } from "react";
import katja from "../../images/katja_cv.jpg"

import "./about.scss"

const About = () => {
	const myRef = useRef();
	const [picAnimation, setPicAnimation] = useState();

	useEffect(() => {
		// Observe when image is being scrolled into view
		const observer = new IntersectionObserver((entries) => {
		const entry = entries[0];
		setPicAnimation(entry.isIntersecting);
		});
		
		observer.observe(myRef.current);
		
	}, []);

	return (
		<section id="about" className="about-container bg-dark text-light px-4 py-10 md:px-40 md:py-20">
			<h1 className="text-xl md:text-3xl">
				About
			</h1>
			<br />

			<div className="flex flex-col md:flex-row">

				<div
					ref={myRef}
					className={`flex-1 flex justify-start justify-center sm:items-center md:pl-4 md:pr-4 mt-4 md:mt-0 m-4 ${picAnimation ? "scale-up" : ""}`}

				>
					<img src={katja} alt="katja" title="Yep, that's me!" />
				</div>

				<div className="flex-1 md:pr-4">
					<p>Hi there! I am an individual who thrives on creativity, staying busy with projects and always eager to learn.
					</p>		
					<br />
					<p>In 2022, I completed a 12-week (420 hours) Bootcamp in Prague, which provided me with a foundation in web development. After that, I've built projects for a logistics start-up and an organization for queer women in Prague. Since June 2023 I am working full-time as a JavaScript developer in the Frontend Team of TeskaLabs.</p>
					<br />
					<p>With a background in education, I bring well-developed soft and organizational skills to the table, along with a collaborative mindset to thrive in team environments.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
