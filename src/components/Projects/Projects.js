import React from 'react'
import Carousel from './Carousel'

export default function Projects() {
  return (
	  <section className="projects-container bg-light text-dark px-4 py-10 md:px-40 md:py-20">
		<h1 id="projects">
			Projects
		</h1>
		<br />
		<div>
					<Carousel />
		</div>


	</section>
  )
}
