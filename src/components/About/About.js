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
		<section className="about-container bg-dark text-light px-4 py-10 md:px-40 md:py-20">
			<h1 id="about">
				About
			</h1>
			<br />

			<div className="flex flex-col md:flex-row">
				<div className="flex-1 md:pr-4">
					<h3>About me</h3>
					<br />
					<p>Hi there! I am a highly motivated and enthusiastic web developer with a passion for creating.
					</p>		
					<br />
					<p>In 2022, I completed a 12-week (420 hours) Bootcamp in Prague, which provided me with a solid foundation to sharpen my skills. Since then, coding and continuous learning have been integral parts of my daily routine.</p>
					<br />
					<p>With a background in education, I bring well-developed soft and organizational skills to the table, along with a collaborative mindset to thrive in team environments.
					</p>
					<br />
					Currently, I am employed in the cybersecurity industry, where I play an essential role in ensuring an intuitive and user-friendly interface.
				</div>
				
				<div 
					ref={myRef} 
					className={`flex-1 flex justify-center items-center md:pl-4 md:pr-4 mt-4 md:mt-0 m-4 ${picAnimation ? "scale-up" : ""}`}

					>
					<img src={katja} alt="" title="Yep, that's me!" />

				</div>
				
				<div className="flex-1 md:pl-4">
					<h3>My time off</h3>
					<br />
					<p>	In my free time, I enjoy being outdoors and the company of my friends and family. I like creating things and learning new skills. I'm interested in analogue and digital fotography.</p>
					<br />
					<p>	In contrast to that and to keep physically healthy, I lift weights in the gym.</p>
					<br />
					<p>My friends value my empathy and sense of humour.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
