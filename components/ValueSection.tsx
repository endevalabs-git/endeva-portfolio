'use client';

import { ScrollReveal } from './ScrollReveal';

const VALUES = [
  'We engineer for scale.',
  'We design for longevity.',
  'We build what matters.',
  'We think in systems.',
  'We move with intention.',
];

export function ValueSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-500 mb-20 md:mb-28">
            Our Philosophy
          </h2>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {VALUES.map((value, index) => {
            const directions = ['left', 'right', 'up', 'scale', 'left'];
            const direction = directions[index % directions.length];
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.15}
                direction={direction as any}
                distance={30}
              >
                <div className="group cursor-default">
                <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight group-hover:text-neutral-600 transition-colors duration-500 transform group-hover:translate-x-2 px-4 md:px-0">
                  {value}
                </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
