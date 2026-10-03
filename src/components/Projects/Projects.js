import { projectsData as cards } from './ProjectsData';
import { FaRegEye } from 'react-icons/fa';
import './projects.scss';

export default function Projects() {

  return (
		<div id='projects' className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
			<div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
				<div className="col-span-12 md:col-span-4">
					<span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8]">
						Selected Work
					</span>
					<h2 className="mt-3 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#e8e6dc]">
						Projects
					</h2>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-6 md:gap-8">
				{cards.map((card, idx) => (
					<article key={idx} className="group col-span-12 md:col-span-6 border border-[#e8e6dc] bg-[#131b2d] flex flex-col">
						<div className="relative overflow-hidden h-64 md:h-[340px] border-b border-[#e8e6dc]">
							<img alt="Admin Panel" className="proj-img w-full h-full object-cover" src={card.image} />
							<div className="absolute top-4 left-4 bg-[#0b1220] border border-[#e8e6dc] px-2 py-1">
								<span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8] !text-[#e8e6dc]">
									0{idx + 1} / {card.type}
								</span>
							</div>
							<div className="absolute top-4 right-4 bg-[#e8e6dc] text-[#0b1220] px-2 py-1 font-mono text-[10px] tracking-widest uppercase">
								{card.year}
							</div>
						</div>
						<div className="p-6 md:p-8 flex-1 flex flex-col">
							<h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#e8e6dc]">
								{card.title}
							</h3>
							<span className="font-mono text-[11px] tracking-wider uppercase border border-[#e8e6dc]/90 px-2.5 py-1 text-[#e8e6dc]">
								{card.tech}
							</span>
							<p className="mt-5 text-[#9aa3b8] leading-relaxed text-[15px] flex-1">
								{card.description}
							</p>
								<div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-6">
									{card.github &&
									<a href={card.github} target='_blank' rel='noreferrer' title='Look at the code' className="inline-flex gap-2 font-mono text-xs tracking-[0.18em] uppercase link-underline text-[#9aa3b8]">
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml" aria-hidden="true">
												<path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path>
											<path d="m14.5 4-5 16"></path>
											</svg>
											Code
										</a>
									}
									{card.live &&
									<a href={card.live} target='_blank' rel='noreferrer' title='See live' className="inline-flex gap-2 font-mono text-xs tracking-[0.18em] uppercase link-underline text-[#9aa3b8]">
										<FaRegEye />
											Live
										</a>
									}
								</div>
						</div>
					</article>
				))}
			</div>
		</div>
  );
}
