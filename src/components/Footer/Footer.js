
import React from 'react';
import { FaLinkedinIn, FaRegEnvelope, FaGithubSquare }from 'react-icons/fa';

import './footer.scss';

export default function Footer() {

	const currentYear = new Date();

	return (
		<section className='footer-container bg-light text-dark px-4 py-10 md:px-40 md:py-10' id='contact'>
			<div className='flex md:flex-row justify-center'>
				<div className='px-4'>
					<a
						rel='noreferrer'
						href='https://github.com/queuing4oranges'
						target='_blank'
						title='Check out my Github'
					>
						<FaGithubSquare size={50} color='#00C59B' className='footer-icon' />
					</a>
				</div>

				<div className='px-4'>
					<a
						rel='noreferrer'
						href={`mailto:katjazenker@gmail.com?subject=Let's get in touch`}
						title='Get in touch'
					>
						<FaRegEnvelope size={50} color='#00C59B' className='footer-icon' />
					</a>
				</div>

				<div className='px-4'>
					<a
						rel='noreferrer'
						href='https://www.linkedin.com/in/katja-zenker'
						target='_blank'
						title='Connect via LinkedIn'
					>
						<FaLinkedinIn size={50} color='#00C59B' className='footer-icon' />
					</a>
				</div>
			</div>

			<div className='flex justify-center mt-2 text-dark'>
				<p>Copyright &#64; {currentYear.getFullYear()} Katja Zenker</p>
			</div>
		</section>
	)
}
