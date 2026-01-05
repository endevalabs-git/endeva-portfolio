'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="w-full bg-white min-h-screen flex items-center justify-center py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neutral-300 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-neutral-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-neutral-300 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-neutral-300 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 border border-neutral-300 rotate-45"></div>
      </div>
      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8 md:space-y-10"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-xs md:text-sm tracking-widest text-neutral-500 uppercase font-medium">
                Digital Studio
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              Engineering the future,
              <br />
              <span className="text-neutral-600">one idea at a time.</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed font-light">
            We engineer intelligent systems, design elegant software, and build thoughtful brands for companies that dare to innovate.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button className="px-8 py-3 md:px-10 md:py-4 border border-neutral-900 text-neutral-900 font-light text-sm md:text-base transition-all duration-300 hover:bg-neutral-900 hover:text-white">
              Explore Our Work
            </button>
            <button className="px-8 py-3 md:px-10 md:py-4 text-neutral-900 font-light text-sm md:text-base transition-colors duration-300 hover:text-neutral-600">
              Get in Touch →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-12 md:gap-16 pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group cursor-default"
            >
              <div className="text-2xl md:text-3xl font-light text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">7+</div>
              <p className="text-xs md:text-sm text-neutral-500 mt-1 group-hover:text-neutral-600 transition-colors duration-300">Services Offered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group cursor-default"
            >
              <div className="text-2xl md:text-3xl font-light text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">50+</div>
              <p className="text-xs md:text-sm text-neutral-500 mt-1 group-hover:text-neutral-600 transition-colors duration-300">Projects Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="group cursor-default"
            >
              <div className="text-2xl md:text-3xl font-light text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">12+</div>
              <p className="text-xs md:text-sm text-neutral-500 mt-1 group-hover:text-neutral-600 transition-colors duration-300">Years Experience</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
