import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValueSection } from '@/components/ValueSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full pt-16 md:pt-20">
        <Hero />
        <ValueSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
