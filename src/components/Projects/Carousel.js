import React, { useState } from 'react';
import Slider from 'react-slick';
import { projectsData } from "./ProjectsData";
import { FaRegEye, FaCode } from "react-icons/fa";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

import "./Carousel.scss";

function NextArrow(props) {
	const { onClick, className } = props;
	return (
		<FiChevronsRight onClick={onClick} className={className}/>
	)
}

function PrevArrow(props) {
	const { onClick, className } = props;
	return (
		<FiChevronsLeft onClick={onClick} className={className} />
	)
}

export default function Carousel() {
	const [cards, setCards] = useState(projectsData);
	const settings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					}
			},
			{
				breakpoint: 600,
					settings: {
						slidesToShow: 1,
						swipeToSlide: 2,
					}
			},
			{
				breakpoint: 480,
					settings: {
						slidesToShow: 1,
						swipesToSlide: 1,
					}
			}
		]
	};

	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{cards.map((card, idx) => (
					<div key={idx} className="shadow-lg h-full flex flex-col justify-between">
						<div>
							<div>
								<img className="h-full w-full object-cover px-3" src={card.image} alt={card.title} />
							</div>

							<div className="flex flex-col justify-between bg-light p-3 m-5">
								<h3 className='text-accent font-semibold'>{card.title}</h3>
								<h4 className="font-medium text-dark my-2">{card.tech}</h4>
								<p className="">{card.description}</p>
							</div>
						</div>
						<div className='flex justify-center bg-light p-3 m-5'>
							{card.live &&
								<a href={card.live} target="_blank" rel="noreferrer" title='See live'>
									<button className='flex justify-center items-center bg-accent hover:bg-hover text-light font-bold py-2 px-4 m-4 rounded'>
										<FaRegEye />
										<span>Live</span>
									</button></a>
							}
							<a href={card.github} target="_blank" rel="noreferrer" title='Look at the Code'>
								<button className='flex justify-center items-center bg-accent hover:bg-hover text-light font-bold py-2 px-4 m-4 rounded'>
									<FaCode />
									<span>Code</span>
								</button>
							</a>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
};
