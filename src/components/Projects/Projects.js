import React from 'react'
import Carousel from './Carousel'

export default function Projects() {
  return (
	  <section id='projects' className='projects-container h-full bg-light text-dark h-400 px-4 py-10 md:px-40 md:py-20'>
		<h1 className='text-xl md:text-3xl'>
			Projects
		</h1>
		<br />
		<Carousel />
	</section>
  );
}
