
import React from 'react';
import { FaLinkedinIn, FaRegEnvelope, FaGithubSquare }from 'react-icons/fa';

import './footer.scss';

export default function Footer() {

	const date = new Date();
	const currentYear = date?.getFullYear();

	return (
		<footer id="contact" className="bg-[#ff6b00] text-white relative overflow-hidden" data-testid="footer-section">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
				<span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8] !text-white/80">
					Contact
				</span>
				<div className="mt-6">
					<a href="mailto:katjazenker@gmail.com" className="inline-flex items-baseline font-display text-6xl md:text-8xl font-black tracking-tighter leading-none hover:opacity-90 transition-opacity">
						Let's talk
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-3 md:ml-4 self-center" aria-hidden="true">
							<path d="M7 7h10v10"></path>
							<path d="M7 17 17 7"></path>
						</svg>
					</a>
				</div>
				<div className="mt-16 grid grid-cols-12 gap-6 border-t border-white/25 pt-10">
					<div className="col-span-12 md:col-span-5">
						<div className="font-mono text-[11px] tracking-widest uppercase text-white/70">
							Currently
						</div>
						<div className="mt-2 font-display text-2xl font-bold">
							Open to freelance &amp; full-time work.
						</div>
					</div>
					<div className="col-span-6 md:col-span-3">
						<div className="font-mono text-[11px] tracking-widest uppercase text-white/70">
							{''}
						</div>
						<ul className="mt-3 space-y-2 font-mono text-sm">
							<li>
									<a href="#" className="link-underline-orange" style={{ backgroundImage: "linear-gradient(#ffffff, #ffffff)" }}>
									github/queuing4oranges
								</a>
							</li>
							<li>
									<a href="#" className="link-underline-orange" style={{ backgroundImage: "linear-gradient(#ffffff, #ffffff)" }}>
									linkedin/katja-zenker
								</a>
							</li>
							<li>
									<a href="#" className="link-underline-orange" style={{ backgroundImage: "linear-gradient(#ffffff, #ffffff)" }}
								>
									are.na/queuing4oranges
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-12 md:col-span-4 md:text-right">
						<div className="font-mono text-[11px] tracking-widest uppercase text-white/70">
							Signal
						</div>
						<div className="flex flex-col mt-2 font-display text-2xl font-bold">
							<span>50.08° N</span>
							<span>14.44° E</span>
						</div>
					</div>
				</div>
				<div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/25 pt-6 font-mono text-xs tracking-widest uppercase text-white/80">
					<span>© {currentYear} · Katja Zenker · queuing4oranges</span>
				</div>
			</div>
		</footer>
	)
}
