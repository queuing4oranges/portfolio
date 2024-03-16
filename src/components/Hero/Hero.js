import  { useState } from "react";
import ContactModal from "./ContactModal";

import "./hero.scss";

const Hero = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
	<section
		className="hero-container relative w-full h-400 overflow-hidden"
		id="home">
			<div className="hero-image h-full w-full flex flex-col items-center justify-center text-center">
				<h1 className="hero-title text-light">Hi, I'm Katja</h1>
				<h2 className="hero-text text-light">a Prague based Web Developer</h2>
				<button
					type="button"
					onClick={() => setOpenModal(!openModal)}
					className="bg-accent text-dark text-xl py-4 px-8 mt-10 rounded-full hover:bg-hover hover:text-accent"
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
