import React from 'react';
import { technologies } from "./TechStackData";

import "./techstack.scss";

export default function TechStack() {
  return (
	  <section className = "bg-dark text-light px-4 py-10 md:px-40 md:py-20">
		  <h1 id="tech">
			  Tech Stack
		  </h1>
		  <br />
		  
		  <div className="techstack-container grid grid-cols-2 md:grid-cols-6 gap-4 justify-items-center">
			{technologies.map((tech, idx) => (
				<div key={idx} className="tech-card w-32 h-44 flex flex-col items-center pt-5 pb-5 justify-between bg-light rounded-md">
						<tech.icon height={80} width={80}/>
						<p className="text-center text-dark">{tech.title}</p>
				</div>
			))}
			
		  </div>
		
	</section>
  )
}
