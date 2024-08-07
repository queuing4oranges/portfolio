import React from 'react';
import { courses } from './CoursesData';
import { Ticked } from './CourseIcons';

export default function Courses() {
  return (
	  <section id='courses' className = 'courses-container bg-light text-dark px-4 py-10 md:px-40 md:py-20'>
		  <h1 className='text-xl md:text-3xl'>
			Education
		</h1>
		<br />
		
		<div className='grid grid-cols-1 gap-4'>
			{courses && 
				courses.map((course, idx) => (
					<div key={idx} className='rounded-lg shadow-lg p-4 md:p-10 hover:shadow-xl transition duration-300' >
						<h3 className='flex items-center text-md md:text-xl mb-4'>
							<p>{course.title}</p>
						</h3>
						<div>
							{course.info.map((infoItem, idx) => (
								<div key={idx} className='flex items-start justify-start border-l-8 border-accent my-2 p-2 bg-dark bg-opacity-10 hover:bg-accent'>
									<p className='p-1 text-lg'><Ticked height={20} width={20} fill='none' /></p>
									<p className='text-lg ml-2 p-0'>{infoItem}</p>
								</div>
							))}
						</div>
					</div>
				))
			}
		</div>
	</section>
  )
}
