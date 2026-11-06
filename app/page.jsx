import Hero from '@/components/Hero';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Inquiry from '@/components/Inquiry';
import Portfolio from '@/components/Portfolio';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed top-3 left-3 z-100 -translate-y-[150%] bg-brand-accent px-5 py-3 text-black focus:translate-y-0">Skip to content</a>
      <SmoothScroll>
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Packages />
          <Portfolio />
          <Testimonials />
          <Faq />
          <Inquiry />
        </main>
      </SmoothScroll>
    </>
  );
}
