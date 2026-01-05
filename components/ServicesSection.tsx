'use client';

import { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

const SERVICES = [
  {
    title: 'Software Development',
    description: 'Custom applications built for scale and performance. We create robust, scalable software solutions that drive business growth and operational efficiency.',
    icon: 'square',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that evolve with your business. Harness the power of AI to automate processes, gain insights, and make data-driven decisions.',
    icon: 'circle',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
  },
  {
    title: 'Automations',
    description: 'Streamlined workflows that work while you focus. Eliminate repetitive tasks and optimize your business processes with intelligent automation.',
    icon: 'triangle',
    features: ['Workflow Automation', 'RPA Solutions', 'Process Optimization', 'Integration Services']
  },
  {
    title: 'College & Research',
    description: 'Advancing innovation through academic partnership. Collaborate with leading institutions to push the boundaries of technology and research.',
    icon: 'diamond',
    features: ['Academic Partnerships', 'Research Projects', 'Innovation Labs', 'Technology Transfer']
  },
  {
    title: 'Digital Marketing',
    description: 'Strategies that connect and convert with clarity. Drive growth through data-driven marketing campaigns that deliver measurable results.',
    icon: 'square',
    features: ['SEO Optimization', 'Content Marketing', 'Social Media Strategy', 'Performance Analytics']
  },
  {
    title: 'Branding & Rebranding',
    description: 'Visual identity that endures and evolves. Create compelling brand experiences that resonate with your audience and stand the test of time.',
    icon: 'circle',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Brand Implementation']
  },
  {
    title: 'Video Editing',
    description: 'Compelling narratives crafted with precision. Transform raw footage into engaging stories that captivate and inspire your audience.',
    icon: 'triangle',
    features: ['Video Production', 'Post-Production', 'Motion Graphics', 'Content Strategy']
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight and engage users. Design experiences that are not just beautiful, but also functional and user-friendly.',
    icon: 'diamond',
    features: ['User Research', 'Interface Design', 'Prototyping', 'Usability Testing']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure for modern digital needs. Migrate, optimize, and manage your cloud infrastructure with expert guidance.',
    icon: 'square',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation']
  },
  {
    title: 'Data Analytics',
    description: 'Transforming data into actionable business insights. Turn your data into a competitive advantage with advanced analytics and visualization.',
    icon: 'circle',
    features: ['Data Visualization', 'Business Intelligence', 'Predictive Modeling', 'Data Warehousing']
  }
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SERVICES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SERVICES.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentService = SERVICES[currentIndex];

  return (
    <section id="services" className="w-full bg-white py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-500 mb-4">Services</h2>
            <p className="text-neutral-600 font-light">
              A complete suite of digital services to bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Main Carousel Card */}
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-neutral-50/80 backdrop-blur-sm border border-neutral-200/50 hover:bg-gradient-to-br hover:from-neutral-50/90 hover:via-pink-50/20 hover:to-green-50/20 transition-all duration-700 hover:shadow-2xl hover:shadow-pink-500/10 hover:border-neutral-300/60">
              <div className="relative min-h-[500px] overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {SERVICES.map((service, index) => (
                    <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[500px]">
                      {/* Left Side - Icon and Title */}
                      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center bg-gradient-to-br from-neutral-100/50 to-neutral-50/30 order-2 md:order-1">
                        <div className="mb-6 md:mb-8">
                          {service.icon === 'square' && (
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-900 transition-colors duration-300"></div>
                          )}
                          {service.icon === 'circle' && (
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-900 rounded-full transition-colors duration-300"></div>
                          )}
                          {service.icon === 'triangle' && (
                            <div className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[56px] md:border-l-[40px] md:border-r-[40px] md:border-b-[70px] border-l-transparent border-r-transparent border-b-neutral-900 transition-colors duration-300"></div>
                          )}
                          {service.icon === 'diamond' && (
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-900 rotate-45 transition-colors duration-300"></div>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-800 mb-4 md:mb-6 px-4">
                          {service.title}
                        </h3>
                        <div className="flex space-x-2">
                          {SERVICES.map((_, dotIndex) => (
                            <button
                              key={dotIndex}
                              onClick={() => goToSlide(dotIndex)}
                              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                dotIndex === currentIndex
                                  ? 'bg-neutral-800 scale-125'
                                  : 'bg-neutral-400 hover:bg-neutral-600'
                              }`}
                              aria-label={`Go to slide ${dotIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Description and Features */}
                      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2">
                        <p className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed font-light mb-6 md:mb-8">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="text-base md:text-lg font-light text-neutral-700 mb-3 md:mb-4">Key Features:</h4>
                          <ul className="space-y-2 md:space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-sm md:text-base text-neutral-600 font-light">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-neutral-400 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-800 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Previous service"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-800 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            aria-label="Next service"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
