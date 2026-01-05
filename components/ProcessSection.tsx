'use client';

import { ScrollReveal } from './ScrollReveal';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We immerse ourselves in your vision, market, and challenges. Understanding shapes everything.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We craft solutions with intentional architecture. Every decision serves purpose.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We engineer with precision and care. Quality compounds over time.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We grow your foundation sustainably. Systems that age well become strength.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-neutral-50 py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-500 mb-4">
              How We Work
            </h2>
            <p className="text-neutral-600 font-light max-w-2xl">
              A proven methodology that delivers results through intentional collaboration.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 md:space-y-20">
          {PROCESS_STEPS.map((step, index) => {
            const direction = index % 2 === 0 ? 'left' : 'right';
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.12}
                direction={direction as any}
                distance={35}
              >
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 pb-8 md:pb-12 lg:pb-20">
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-300 group-hover:text-neutral-400 transition-all duration-500 group-hover:scale-105">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 group-hover:text-neutral-700 transition-colors duration-500 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl font-light group-hover:text-neutral-500 transition-colors duration-300">
                      {step.description}
                    </p>
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
