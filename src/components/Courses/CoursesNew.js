import React from 'react';
import { courses, experiences, education, languages } from './CoursesData';

export default function CoursesNew() {
  return (
    <section id="education" className="border-b border-[#e8e6dc]" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <div className="col-span-12 md:col-span-8">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#ff6b00]">
              Education
            </span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#e8e6dc]">
              Learning
            </h2>
          </div>
        </div>
        <div className="border-t border-[#e8e6dc]">
          {/* work experience */}
          <div className="grid grid-cols-12 gap-6 py-6 border-b border-[#e8e6dc]">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8] ">
                Work Experience
              </span>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-6">
              {experiences?.map((exp, idx) => (
                <React.Fragment key={idx}>
                  <div className="font-display text-xl md:text-3xl font-bold tracking-tight text-[#e8e6dc]">
                    {exp.position}
                  </div>
                  <div className='flex md:flex-row md:justify-between gap-4 mt-2'>
                    <div className="text-[#9aa3b8]">
                      @ {exp.employer}
                    </div>
                    <div className="font-mono text-sm tracking-widest text-[#9aa3b8] flex items-center">
                      {exp.time}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>  
          </div>
          
          {/* courses */}
          <div className="grid grid-cols-12 gap-6 py-6 border-b border-[#e8e6dc]">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8]">
                Courses
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <ul className="divide-y divide-white/10">
                {courses?.map((course, idx) => (
                  <li key={idx} className="py-3 flex items-baseline gap-4 group text-[#e8e6dc]">
                    <span className="font-mono text-xs text-[#6b7391] w-8">
                      0{ idx + 1}
                    </span>
                    <span className="flex-1 group-hover:text-[#ff6b00] transition-colors">
                      { course.name }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* education */}
          <div className="grid grid-cols-12 gap-6 py-6 border-b border-[#e8e6dc]">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8]">
                Formal Education
              </span>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-4">
              {education?.map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 text-[#e8e6dc]">
                  <div className="font-display text-xl md:text-2xl font-semibold">
                    {edu.title}
                  </div>
                  <div className="text-[#9aa3b8] font-mono text-sm">
                    {edu.place}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* languages */}
          <div className="grid grid-cols-12 gap-6 py-6">
            {/* Section label */}
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#9aa3b8]">
                Languages
              </span>
            </div>

            {/* Responsive language cards */}
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {languages?.map((lang, idx) => (
                  <div
                    key={idx}
                    className="group min-w-0 border border-[#e8e6dc] p-4 sm:p-5 hover:bg-[#e8e6dc] transition-colors duration-200"
                  >
                    <div className="font-mono text-[11px] tracking-widest uppercase opacity-70 text-[#e8e6dc] group-hover:text-black transition-colors">
                      {lang.level}
                    </div>

                    <div className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-1 text-[#e8e6dc] group-hover:text-black transition-colors">
                      {lang.language}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          </div>
        </div>
    </section>
  )
}
