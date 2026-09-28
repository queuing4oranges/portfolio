import React from 'react'

export default function HeroNew() {
  
  const date = new Date();
  const currentYear = date.getFullYear()
  
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-[#e8e6dc]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-8 rise">

          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#e8e6dc]"></span>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8]">
              Portfolio · {currentYear ? currentYear : ""}
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-[#c8ccd8] tracking-tighter">
            Hi, I'm
            <span></span>
            <span className="inline-block relative text-[#c8ccd8]">
              <span className="relative z-10">Katja</span>
              <span className="absolute inset-x-0 bottom-1 h-2 md:h-3 bg-[#ff6b00] -z-0"></span>
            </span>
            .
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-[60vw] text-[#c8ccd8] leading-snug">
            <span className="text-[#ff6b00] font-medium">A&nbsp;Prague&nbsp;based&nbsp;developer&nbsp;</span>
            <span>who builds digital things, untangles complicated problems,</span>
            <span className="text-[#c8ccd8] font-medium">&nbsp;and brings questionable humor to the team.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-[#e8e6dc] text-[#0b1220] px-6 py-4 font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-[#ff6b00] transition-colors">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a href="#projects" className="inline-flex items-center gap-3 border border-[#e8e6dc] px-6 py-4 font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-[#e8e6dc] hover:text-[#0b1220] text-[#e8e6dc] transition-colors">
              See projects
            </a>
            <div className="flex items-center gap-2 text-[#9aa3b8] font-mono text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#ff6b00]" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Prague, CZ
            </div>
        </div>
      </div>
      </div>
    </section>
  )
}
