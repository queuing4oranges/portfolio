import Slider from 'react-slick';
import { projectsData as cards } from './ProjectsData';
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
	const settings = {
		infinite: true,
		speed: 500,
		// autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1280,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						// infinite: true,
					}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// infinite: true,
				}
			},
			{
				breakpoint: 768,
					settings: {
						slidesToShow: 1,
						swipeToSlide: 1,
						speed: 1000,
					}
			},
			{
				breakpoint: 480,
					settings: {
						slidesToShow: 1,
						swipesToSlide: 1,
						speed: 1000,
					}
			}
		]
	};

	return (
		<Slider {...settings}>
			{cards.map((card, idx) => (
				<div key={idx} className='cards-container'>
					<div className='card-image'>
						<img className='w-full object-cover px-3' src={card.image} alt={card.title} />
					</div>

					<div className='card-title'>
						<h4 className='text-accent font-semibold text-xl'>{card.title}</h4>
						<h5 className='font-medium text-dark'>{card.tech}</h5>
					</div>

					<div className='card-description'>
						<p>{card.description}</p>
					</div>

					<div className='card-buttons'>
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
