import Hero from '@/components/Hero';
import About from '@/components/About';
import Faq from '@/components/Faq';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SmoothScroll>
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Faq />
        </main>
      </SmoothScroll>
    </>
  );
}
