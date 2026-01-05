'use client';

import { ScrollReveal } from './ScrollReveal';

export function CTASection() {
  return (
    <section id="contact" className="w-full bg-neutral-900 text-white py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Have an idea worth building?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 font-light">
              Let's turn it into something remarkable together.
            </p>
            <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button className="group relative px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 border border-white text-white font-light text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-neutral-900 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Start a Conversation</span>
              </button>
              <button className="px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 text-white font-light text-sm md:text-base transition-colors duration-300 hover:text-neutral-300 w-full sm:w-auto">
                Schedule a Call →
              </button>
            </div>
            <p className="text-sm text-neutral-500 pt-8">
              We typically respond within 24 hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
