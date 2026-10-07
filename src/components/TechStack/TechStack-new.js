import { techstack } from './TechStackData';

export default function TechStackNew() {
  return (
    <section id="stack" className="relative border-b border-[#e8e6dc] bg-[#060a13] text-[#e8e6dc] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 bg-[#060a13]">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <div className="col-span-12 md:col-span-6">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8] !text-[#9aa3b8]">
              Tech Stack
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Tools
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/15 border border-white/15">
        {techstack && techstack.map((tech, idx) => (
          <div key={idx} className="bg-[#060a13] p-6 md:p-8">
            <div>
              {tech.id &&
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8] !text-[#6b7391]">
                  {tech.id} · {tech.title}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-[#ff6b00]" aria-hidden="true">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                  </path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              }
              <div className="flex flex-wrap gap-2">
                {tech.tools && tech.tools.map((tool, idx) => (
                  <span key={idx} className="font-mono text-[12px] tracking-wider uppercase border border-white/20 px-3 py-1.5 hover:bg-[#ff6b00] hover:text-[#0b1220] hover:border-[#ff6b00] transition-colors cursor-default">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
