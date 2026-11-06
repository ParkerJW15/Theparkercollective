import Image from 'next/image';

const instagram = 'https://www.instagram.com/theparkercollectiveco/';
const contact = 'mailto:theparkercollective.co@gmail.com';

function Arrow({ className = '' }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Asterisk({ className = '' }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6 26.6 5.4" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
        <section className="hero relative isolate overflow-hidden bg-brand-black" aria-labelledby="hero-title">
          <div className="hero-photo absolute inset-0 -z-20">
            <div className="hero-photo-panel hero-photo-portrait relative overflow-hidden">
              <Image
                src="/images/portraits/headshot1.jpeg"
                alt="Parker working on his tablet during a studio shoot"
                fill
                preload
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="hero-photo-panel hero-photo-detail relative overflow-hidden">
              <Image
                src="/images/portraits/shot2.jpeg"
                alt="A close-up of Parker holding his phone, seated in jeans and white sneakers"
                fill
                preload
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="hero-shade pointer-events-none absolute inset-0 -z-10" />

          <header className="hero-header relative z-10 flex items-center justify-between gap-5">
            <a href="/" className="wordmark" aria-label="The Parker Collective home">
              <span>the parker</span>
              <span className="flex items-center gap-2">collective<Asterisk className="h-4 w-4 text-brand-accent" /></span>
            </a>
            <p className="hidden text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white lg:block">
              Independent spirit.<br />Louisville, Kentucky.
            </p>
            <nav aria-label="Main navigation" className="flex items-center gap-8">
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="nav-instagram hidden items-center gap-2 text-xs text-white transition-colors hover:text-brand-accent sm:flex">
                Instagram <Arrow className="h-3.5 w-3.5" />
              </a>
              <a href={contact} className="nav-contact group inline-flex items-center gap-5 border-b border-white pb-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:border-brand-accent hover:text-brand-accent">
                Let’s talk <Arrow className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </nav>
          </header>

          <div className="hero-content relative text-center">
            <p className="hero-eyebrow hero-enter flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <span className="bg-brand-accent px-2 py-0.5 text-brand-black">
                Social media. A little more personal.
              </span>
            </p>

            <h1 id="hero-title" className="hero-title my-7 font-bold uppercase text-center w-full">
              <span className="hero-line"><span>Show up.</span></span>
              <span className="hero-line"><span>Stand out.</span></span>
              <span className="hero-line text-brand-accent"><span>Stay you.</span></span>
            </h1>

            <div className="hero-enter hero-description">
              <p className="text-sm leading-[1.8] text-white sm:text-[15px]">
                Intentional content. A strategy that fits.<br className="hidden sm:block" />
                Social media that feels like your brand,<br className="hidden sm:block" />
                and connects with your people.
              </p>
              <a href={contact} className="hero-cta group mt-7 inline-flex min-h-14 items-center justify-between gap-9 bg-brand-accent px-6 text-xs font-bold text-black transition-colors hover:bg-white">
                LET’S WORK TOGETHER
                <Arrow className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="hero-footer hero-enter flex items-end justify-between gap-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white">Built on creativity. Backed by strategy.</p>
            <div className="photo-credit flex items-center gap-3">
              <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
              <p className="text-[10px] uppercase leading-[1.7] tracking-[0.12em]">
                Parker Wheatley<br />
                <span className="text-white">Your creative partner</span>
              </p>
            </div>
          </div>
        </section>

        <div className="service-strip overflow-hidden bg-brand-accent py-5 text-black">
          <p className="sr-only">Social media management, content creation, and brand strategy.</p>
          <div className="service-track flex w-max" aria-hidden="true">
            {[0, 1, 2, 3].map((copy) => (
              <div className="service-group flex shrink-0 items-center" key={copy}>
                {['Social media management', 'Content creation', 'Brand strategy'].map((service) => (
                  <span key={service} className="flex shrink-0 items-center gap-10 pr-10 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">
                    {service}<Asterisk className="h-4 w-4 shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
