'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-out ${
      isScrolled
        ? `md:top-0 md:bg-white md:border-b md:border-neutral-200 md:rounded-none top-4 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 md:py-4 py-3 ${isOpen ? 'rounded-xl' : 'rounded-full'}`
        : 'top-0 bg-white border-b border-neutral-200 py-4 md:py-6 rounded-none'
    }`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-light">
            Endeva Labs
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            <a
              href="#services"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#process"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm font-light text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-5 h-0.5 bg-neutral-900 transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-neutral-900 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-neutral-900 transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="pb-4 space-y-4 border-t border-neutral-200 pt-4">
            <a
              href="#services"
              className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#work"
              className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#process"
              className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              Process
            </a>
            <a
              href="#contact"
              className="w-full text-sm font-light text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
