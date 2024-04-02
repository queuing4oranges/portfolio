import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { projectsData } from "./ProjectsData";

export default function Carousel() {
	const settings = {
		dots: true,
		fade: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<Slider {...settings}>
			{projectsData && projectsData.map((project, idx) => (
				<div key={idx}>
					<h5>{project.title}</h5>
					<h6>{project.tech}</h6>
					<p>{project.description}</p>
					<img src={project.image} alt={project.title}/>
					<button>{project.github}</button>
					<button>{project.live}</button>
				</div>
			))}
		</Slider>
  	)
}
