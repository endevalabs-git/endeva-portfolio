'use client';

import { ScrollReveal } from './ScrollReveal';

const FOOTER_SECTIONS = [
  {
    title: 'Services',
    links: [
      'Software Development',
      'AI & Machine Learning',
      'Automations',
      'College & Research',
      'Digital Marketing',
      'Branding & Rebranding',
      'Video Editing',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Work', 'Process', 'Contact', 'Privacy', 'Terms'],
  },
  {
    title: 'Connect',
    links: ['Twitter', 'LinkedIn', 'GitHub', 'Instagram', 'Email'],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <div className="space-y-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light">Endeva Labs</h2>
              <p className="text-neutral-600 max-w-md leading-relaxed">
                A digital studio engineering solutions for scale, designing for
                longevity, and building what matters.
              </p>
            </div>

            {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 py-12">
              {FOOTER_SECTIONS.map((section, index) => (
                <div key={index}>
                  <h3 className="text-sm font-light text-neutral-900 mb-4 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 text-xs text-neutral-500">
              <p>&copy; 2026 Endeva Labs. All rights reserved.</p>
              <p>Designed and built with intention.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
