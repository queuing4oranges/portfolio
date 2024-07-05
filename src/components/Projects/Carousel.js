import React, { useState } from 'react';
import Slider from 'react-slick';
import { projectsData } from './ProjectsData';
import { FaRegEye, FaCode } from 'react-icons/fa';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import './carousel.scss';

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
						arrows: false,
						speed: 1000,
					}
			},
			{
				breakpoint: 480,
					settings: {
						slidesToShow: 1,
						swipesToSlide: 1,
						arrows: false,
						speed: 1000,
					}
			}
		]
	};

	return (
		<Slider {...settings}>
			{cards.map((card, idx) => (
				<div key={idx} className='cards-container'>
					<div className='image-content'>
						<img className='w-full object-cover px-3' src={card.image} alt={card.title} />
					</div>

					<div className='title-content'>
						<h3 className='text-accent font-semibold text-2xl'>{card.title}</h3>
						<h4 className='font-medium text-dark text-md'>{card.tech}</h4>
					</div>

					<div className='description-content'>
						<p>{card.description}</p>
					</div>

					<div className='button-content'>
						{card.live &&
							<a href={card.live} target='_blank' rel='noreferrer' title='See live'>
								<button className='bg-accent hover:bg-hover text-light font-bold rounded'>
									<FaRegEye />
									<span>Live</span>
								</button></a>
						}
						<a href={card.github} target='_blank' rel='noreferrer' title='Look at the Code'>
							<button className='bg-accent hover:bg-hover text-light font-bold rounded'>
								<FaCode />
								<span>Code</span>
							</button>
						</a>
					</div>
				</div>
			))}
		</Slider>
	)
};
