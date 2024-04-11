import React, { useEffect, useState } from 'react';

import { projectsData } from "./ProjectsData";

import "./Carousel.scss";

export default function Carousel() {
	const [cards, setCards] = useState(projectsData);
	const [currentCard, setCurrentCard] = useState(0);

	useEffect(() => {
		let autoslide = setInterval(() => {
			nextSlide();
		}, 2000);

		return () => {
			clearInterval(autoslide);
		}
	},[currentCard]);

	const nextSlide = () => {
		setCurrentCard((oldCard) => {
			const newCard = (oldCard + 1) % cards.length;
			return newCard;
		});
	};

	const prevSlide = () => {
		setCurrentCard((oldCard) => {
			const newCard = (oldCard - 1 + cards.length) % cards.length;
			return newCard;
		});
	};


	return (
		<div className="slider-container relative">
				<div className="relative">
					<div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
						{cards.map((card, index) => (
							<div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">

								<div className="flex-shrink-0">
									<img className="h-96 w-full object-cover" src={card.image} alt={card.title} />
								</div>

								<div className="flex flex-1 flex-col justify-between bg-light p-6">
									<div className="flex-1">
										<h3 className='text-accent font-semibold'>{card.title}</h3>
										<p className="text-sm font-medium text-dark">{card.tech}</p>
										<a href="#" className="mt-2 block">
											<p className="text-xl text-gray-900">{card.description}</p>
											<p className="mt-3 text-base text-gray-500">{card.github}</p>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};



		// <div className='slider-container' style={{position: "relative"}}>
		// 		{cards.map((card, index) => {
		// 			const { title, tech, description, image, github, live } = card

		// 			return (
		// 				<article
		// 					// className='slide'
		// 					key={index}
		// 					style={{ transform: `translateX(${100 * (index - currentCard)}%)` }}
		// 				>
		// 					{/* <img src={image} alt={title} /> */}
		// 					<h4>{title}</h4>
		// 					<h5>{tech}</h5>
		// 					<p>{description}</p>
		// 					<button>{github}</button>
		// 					<button>{live}</button>

		// 				</article>
		// 			)
		// 		})}

		// 	<button style={{ position: "absolute" }} onClick={prevSlide} className='prev'></button>
		// 	<button style={{ position: "absolute" }} onClick={nextSlide} className='next'></button>
		// </div>

//   	)
// }
