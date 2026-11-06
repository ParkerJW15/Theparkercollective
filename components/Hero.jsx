import Image from 'next/image';

const instagram = 'https://www.instagram.com/theparkercollectiveco/';
const contact = '#inquiry';
const heroLine = 'mb-[-.1em] block overflow-hidden pt-[.04em] pb-[.1em] [&>span]:block motion-safe:[&>span]:animate-[line-arrive_.95s_cubic-bezier(.2,.7,.2,1)_both]';

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
        <section className="relative isolate flex min-h-[max(780px,calc(100svh-60px))] flex-col overflow-hidden bg-brand-black max-[900px]:min-h-[max(760px,calc(100svh-60px))] max-[640px]:min-h-[max(790px,100svh)]" aria-labelledby="hero-title">
          <div className="absolute inset-0 -z-20 grid grid-cols-2 overflow-hidden max-[640px]:bottom-auto max-[640px]:h-[65%]">
            <div className="relative overflow-hidden">
              <Image
                src="/images/portraits/headshot1.jpeg"
                alt="Parker working on his tablet during a studio shoot"
                fill
                preload
                sizes="50vw"
                className="object-cover object-[center_32%] motion-safe:animate-[photo-arrive_1.8s_cubic-bezier(.2,.7,.2,1)_both] max-[640px]:object-[58%_25%]"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/portraits/shot2.jpeg"
                alt="A close-up of Parker holding his phone, seated in jeans and white sneakers"
                fill
                preload
                sizes="50vw"
                className="object-cover object-[center_55%] motion-safe:animate-[photo-arrive_1.8s_cubic-bezier(.2,.7,.2,1)_both] motion-safe:[animation-delay:.12s] max-[640px]:object-[center_50%]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,.8),transparent_42%,transparent_75%,rgba(0,0,0,.35)),linear-gradient(90deg,rgba(9,9,9,.68),rgba(9,9,9,.45)_45%,rgba(9,9,9,.12)_72%)] max-[900px]:bg-[linear-gradient(90deg,rgba(9,9,9,.65),rgba(9,9,9,.45)_48%,rgba(9,9,9,.15)),linear-gradient(0deg,rgba(0,0,0,.85),transparent_65%)] max-[640px]:bg-[linear-gradient(0deg,#090909_30%,rgba(9,9,9,.9)_42%,rgba(9,9,9,.38)_72%,rgba(9,9,9,.2)),linear-gradient(90deg,rgba(9,9,9,.15),transparent_75%)]" />

          <header className="relative z-10 flex items-center justify-between gap-5 px-[4.6vw] pt-9 pb-[30px] max-[900px]:px-[5vw] max-[900px]:py-[30px] max-[640px]:px-6 max-[640px]:py-[27px]">
            <a href="/" className="block text-[26px] leading-[.86] font-extrabold tracking-[-.065em] [&>span]:flex max-[640px]:text-[23px]" aria-label="The Parker Collective home">
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
                Let’s talk <Arrow className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
            </nav>
          </header>

          <div className="relative flex-1 px-[4.6vw] pt-[42px] pb-[38px] text-center min-[1700px]:pt-[7vh] max-[900px]:px-[5vw] max-[900px]:pt-[65px] max-[900px]:pb-[35px] max-[640px]:px-6 max-[640px]:pt-[125px] max-[640px]:pb-8">
            <p className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white motion-safe:animate-[fade-arrive_1s_ease_both] max-[640px]:text-[8px] max-[640px]:tracking-[.13em]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <span className="bg-brand-accent px-2 py-0.5 text-brand-black">
                Social media. A little more personal.
              </span>
            </p>

            <h1 id="hero-title" className="my-7 w-full text-center text-[clamp(76px,8.8vw,142px)] leading-[.89] font-bold tracking-[-.075em] uppercase max-[900px]:text-[clamp(70px,11vw,100px)] max-[640px]:mt-6 max-[640px]:mb-[26px] max-[640px]:text-[clamp(58px,13.7vw,87px)]">
              <span className={heroLine}><span className="[animation-delay:.12s]">Show up.</span></span>
              <span className={heroLine}><span className="[animation-delay:.22s]">Stand out.</span></span>
              <span className={`${heroLine} text-brand-accent`}><span className="[animation-delay:.32s]">Stay you.</span></span>
            </h1>

            <div className="motion-safe:animate-[fade-arrive_1s_ease_both] motion-safe:[animation-delay:.5s]">
              <p className="text-sm leading-[1.8] text-white sm:text-[15px]">
                Intentional content. A strategy that fits.<br className="hidden sm:block" />
                Social media that feels like your brand,<br className="hidden sm:block" />
                and connects with your people.
              </p>
              <a href={contact} className="group mt-7 inline-flex min-h-14 items-center justify-between gap-9 bg-brand-accent px-6 text-xs font-bold text-black transition-colors hover:bg-white focus-visible:outline-offset-[6px] max-[640px]:w-full max-[640px]:max-w-[330px]">
                LET’S WORK TOGETHER
                <Arrow className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
              </a>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 px-[4.6vw] pt-5 pb-[30px] motion-safe:animate-[fade-arrive_1s_ease_both] motion-safe:[animation-delay:.65s] max-[900px]:px-[5vw] max-[640px]:px-6 max-[640px]:pt-2.5 max-[640px]:pb-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white max-[640px]:max-w-[130px] max-[640px]:text-[8px] max-[640px]:leading-[1.7]">Built on creativity. Backed by strategy.</p>
            <div className="flex items-center gap-3 max-[640px]:gap-2">
              <span className="h-px w-8 bg-brand-accent max-[640px]:w-4" aria-hidden="true" />
              <p className="text-[10px] uppercase leading-[1.7] tracking-[0.12em] max-[640px]:text-[8px]">
                Parker Wheatley<br />
                <span className="text-white">Your creative partner</span>
              </p>
            </div>
          </div>
        </section>

        <div className="group/ticker overflow-hidden bg-brand-accent py-5 text-black">
          <p className="sr-only">Social media management, content creation, and brand strategy.</p>
          <div className="flex w-max motion-safe:animate-[ticker_40s_linear_infinite] group-hover/ticker:[animation-play-state:paused]" aria-hidden="true">
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
