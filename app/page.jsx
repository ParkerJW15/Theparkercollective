import Hero from '@/components/Hero';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Inquiry from '@/components/Inquiry';
import Portfolio from '@/components/Portfolio';
import Marquee from '@/components/Marquee';
import ConversionSection from '@/components/ConversionSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed top-3 left-3 z-100 -translate-y-[150%] bg-brand-accent px-5 py-3 text-black focus:translate-y-0">Skip to content</a>
      <SmoothScroll>
        <main id="main" tabIndex={-1} className="relative z-10 rounded-b-[48px] bg-paper max-[760px]:rounded-b-[30px]">
          <Hero />
          <ConversionSection />
          <Packages />
          <Portfolio />
          <div data-section-stack className="relative isolate">
            <div data-section-underlay className="relative z-0">
              <Testimonials />
            </div>
            <div data-section-cover className="relative z-10 bg-paper">
              <Marquee />
              <About />
            </div>
          </div>
          <Faq />
          <Inquiry />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
