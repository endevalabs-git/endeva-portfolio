'use client';

import { ScrollReveal } from './ScrollReveal';

const PROJECTS = [
  {
    title: 'Enterprise SaaS Platform',
    category: 'Software Development',
    color: 'from-neutral-100 to-neutral-50',
    style: 'minimal',
    year: '2024',
  },
  {
    title: 'AI-Powered Analytics Engine',
    category: 'AI & Machine Learning',
    color: 'from-neutral-100 to-neutral-50',
    style: 'bordered',
    year: '2024',
  },
  {
    title: 'Workflow Automation Suite',
    category: 'Automations',
    color: 'from-neutral-100 to-neutral-50',
    style: 'minimal',
    year: '2023',
  },
  {
    title: 'Brand Identity System',
    category: 'Branding',
    color: 'from-neutral-100 to-neutral-50',
    style: 'bordered',
    year: '2023',
  },
  {
    title: 'Research Collaboration Platform',
    category: 'College & Research',
    color: 'from-neutral-100 to-neutral-50',
    style: 'minimal',
    year: '2023',
  },
  {
    title: 'Marketing Campaign Assets',
    category: 'Digital Marketing',
    color: 'from-neutral-100 to-neutral-50',
    style: 'bordered',
    year: '2024',
  },
 
  {
    title: 'E-commerce Marketplace',
    category: 'E-commerce Platforms',
    color: 'from-neutral-100 to-neutral-50',
    style: 'bordered',
    year: '2023',
  },
  
  
];

export function ProjectsSection() {
  return (
    <section id="work" className="w-full bg-white py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-500 mb-4">Selected Work</h2>
            <p className="text-neutral-600 font-light">
              A selection of projects that showcase our approach to digital excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => {
            const directions = ['up', 'right', 'down', 'left', 'scale'];
            const direction = directions[index % directions.length];
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.06}
                direction={direction as any}
                distance={20}
              >
                <div className="group cursor-pointer transform hover:scale-105 transition-all duration-500">
                  <div className="h-72 md:h-80 bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-neutral-500/10 flex flex-col" style={{ borderRadius: '0.75rem' }}>
                    <div className="w-full aspect-square flex items-center justify-center mb-4 md:mb-6 relative">
                      <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 border border-neutral-300 rotate-45"></div>
                        </div>
                      </div>
                      <div className="text-center relative z-10">
                        <p className="text-xs md:text-sm text-neutral-500 mb-1 md:mb-2 font-light">
                          {project.category}
                        </p>
                        <p className="text-neutral-400 font-light text-xs md:text-sm">Case Study</p>
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-light leading-tight group-hover:text-neutral-700 transition-colors duration-300 mb-2 md:mb-3 flex-grow">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-xs md:text-sm text-neutral-500 font-light">
                        {project.category}
                      </p>
                      <p className="text-xs text-neutral-400 font-light">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
