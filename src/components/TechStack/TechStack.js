import React from 'react';
import { technologies } from "./TechStackData";

export default function TechStack() {
  return (
	  <section className = "about-container bg-dark text-light px-4 py-10 md:px-40 md:py-20">
		  <h1 id="tech">
			  Tech Stack
		  </h1>
		  
		  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
			{technologies.map((tech, idx) => (
				<Tile key={idx} Icon={tech.icon} title={tech.title} />
			))}
			
		  </div>
		
	</section>
  )
}

const Tile = ({ title, Icon }) => {
	return (
		<div className="w-32 h-44 flex flex-col items-center justify-center bg-light">
			<Icon className="w-8 h-8" />
			<p className="text-center text-dark">{title}</p>
		</div>
	)
}