import  { useState } from 'react';
import ContactModal from './ContactModal';

import './hero.scss';

const Hero = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
	<section
		className='hero-container relative w-screen h-400 overflow-hidden'
		id='home'>
			<div className='hero-image h-full w-full flex flex-col items-center justify-center text-center'>
				<h1 className='hero-title text-light text-xl md:text-3xl text-center leading-tight'>Hi, I'm Katja</h1>
				<h2 className='hero-text text-light text-md md:text-2xl sm:p-4'>a Prague based Web Developer</h2>
				<button
					type='button'
					onClick={() => setOpenModal(!openModal)}
					className='bg-accent text-dark text-sm md:text-md py-2 mt-20 px-4 mt-5 rounded-sm hover:bg-hover hover:text-accent'
				>
				Get in touch
				</button>
			</div>

			{openModal &&
				<ContactModal setOpenModal={setOpenModal} />}
	</section>
	);
};

export default Hero;
