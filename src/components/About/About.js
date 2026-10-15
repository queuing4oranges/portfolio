import katja from '../../images/katja_cv.jpg'

const About = () => {

	return (
		<section id="about" className="border-b border-[#e8e6dc]">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-12 gap-6 md:gap-14 items-start">
					<div className="col-span-12 md:col-span-5">
						<div className="relative">
							<div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-[#ff6b00]">
							</div>
							<div className="relative border border-[#e8e6dc] overflow-hidden">
								<img
									alt="Portrait of Katja Zenker outdoors."
									className="w-full h-[420px] md:h-[520px] object-cover grayscale grayscale-0 transition-all duration-700"
									loading="lazy"
									decoding="async"
									src={katja}
								/>
							</div>
							<div className="absolute -bottom-3 -right-3 bg-[#e8e6dc] text-[#0b1220] px-3 py-2 font-mono text-[11px] tracking-widest uppercase">
								Katja · IRL
							</div>
						</div>
					</div>
					<div className="col-span-12 md:col-span-7 md:pt-6">
						<span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#ff6b00]">
							About
						</span>
						<h2 className="mt-3 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#e8e6dc]">
							Hi there.
						</h2>
						<p className="mt-8 text-lg md:text-l leading-relaxed text-[#c8ccd8]">
							Driven by curiosity and
							<span> </span>
							<span className="text-[#e8e6dc] font-medium">
								a passion for technology, I enjoy solving problems, exploring new ideas, and building meaningful
							</span>
								digital experiences.
							<span> </span>
							<span className="text-[#ff6b00] font-medium">
								Always learning, growing, and finding better ways to create.
							</span>
								{} Prague-based, three languages deep, still convinced the best code is boring code.
						</p>
						<p className="mt-5 text-[#9aa3b8] leading-relaxed">
							Background in education &amp; social work — I bring clear communication and second questions to any team.
						</p>
						<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
							<a href="https://github.com/queuing4oranges" target="_blank" rel="noopener noreferrer" className="group border border-[#e8e6dc] p-5 flex items-center justify-between hover:bg-[#e8e6dc] text-[#e8e6dc] hover:text-[#0b1220] transition-colors">
								<div>
									<div className="font-mono text-[10px] tracking-widest uppercase opacity-60">
										Code
									</div>
									<div className="font-display text-xl font-bold">
										GitHub
									</div>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github group-hover:rotate-12 transition-transform" aria-hidden="true">
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
							</a>
							<a href="mailto:katjazenker@gmail.com" className="group bg-[#ff6b00] text-white border border-[#ff6b00] p-5 flex items-center justify-between hover:bg-[#e8e6dc] hover:border-[#e8e6dc] transition-colors hover:text-[#0b1220]">
								<div>
									<div className="font-mono text-[10px] tracking-widest uppercase opacity-80">
										Write
									</div>
									<div className="font-display text-xl font-bold">
										Email
									</div>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail group-hover:translate-x-1 transition-transform" aria-hidden="true">
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
									<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								</svg>
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group border border-[#e8e6dc] p-5 flex items-center justify-between hover:bg-[#e8e6dc] text-[#e8e6dc] hover:text-[#0b1220] transition-colors">
								<div>
									<div className="font-mono text-[10px] tracking-widest uppercase opacity-60">
										Connect
									</div>
									<div className="font-display text-xl font-bold">
										LinkedIn
									</div>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin group-hover:-rotate-6 transition-transform" aria-hidden="true">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect width="4" height="12" x="2" y="9"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
