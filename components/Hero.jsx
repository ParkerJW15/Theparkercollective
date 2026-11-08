import SiteHeader from './SiteHeader';
import BackgroundVideo from './BackgroundVideo';

const contact = "#inquiry";
const heroLine =
  "mb-[-.1em] block overflow-hidden pt-[.04em] pb-[.1em] [&>span]:block motion-safe:[&>span]:animate-[line-arrive_.95s_cubic-bezier(.2,.7,.2,1)_both]";

function Arrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Asterisk({ className = "" }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6 26.6 5.4"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
export default function Hero() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[max(780px,calc(100svh-60px))] flex-col overflow-hidden bg-brand-black max-[900px]:min-h-[max(760px,calc(100svh-60px))] max-[640px]:min-h-[max(790px,100svh)]"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 -z-20 overflow-hidden max-[640px]:bottom-auto max-[640px]:h-[65%]">
          <BackgroundVideo
            src="/videos/b-roll/stone-building-facade-web.mp4"
            poster="/images/portraits/headshot1.jpeg"
            aria-hidden="true"
            tabIndex={-1}
            className="h-full w-full object-cover object-[center_45%] motion-safe:animate-[photo-arrive_1.8s_cubic-bezier(.2,.7,.2,1)_both] max-[640px]:object-[center_42%]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,.8),transparent_42%,transparent_75%,rgba(0,0,0,.35)),linear-gradient(90deg,rgba(9,9,9,.68),rgba(9,9,9,.45)_45%,rgba(9,9,9,.12)_72%)] max-[900px]:bg-[linear-gradient(90deg,rgba(9,9,9,.65),rgba(9,9,9,.45)_48%,rgba(9,9,9,.15)),linear-gradient(0deg,rgba(0,0,0,.85),transparent_65%)] max-[640px]:bg-[linear-gradient(0deg,#090909_30%,rgba(9,9,9,.9)_42%,rgba(9,9,9,.38)_72%,rgba(9,9,9,.2)),linear-gradient(90deg,rgba(9,9,9,.15),transparent_75%)]" />

        <SiteHeader />

        <div className="relative flex-1 px-[var(--page-gutter)] pt-12 pb-[38px] text-center min-[1700px]:pt-[7vh]  max-[900px]:pt-[65px] max-[900px]:pb-[35px]  max-[640px]:pt-16 max-[640px]:pb-8">
          <p className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white motion-safe:animate-[fade-arrive_1s_ease_both] max-[640px]:text-[8px] max-[640px]:tracking-[.13em]">
            Social media management · Louisville, Kentucky
          </p>

          <h1
            id="hero-title"
            className="my-8 w-full text-center text-[clamp(76px,8.8vw,142px)] leading-[.89] font-bold tracking-[-.075em] uppercase max-[900px]:text-[clamp(70px,11vw,100px)] max-[640px]:mt-6 max-[640px]:mb-[26px] max-[640px]:text-[clamp(44px,12.4vw,80px)]"
          >
            <span className={heroLine}>
              <span className="[animation-delay:.12s]">Good at</span>
            </span>
            <span className={heroLine}>
              <span className="[animation-delay:.22s]">what you do.</span>
            </span>
            <span className={`${heroLine} text-brand-accent`}>
              <span className="[animation-delay:.32s]">Let it show.</span>
            </span>
          </h1>

          <div className="motion-safe:animate-[fade-arrive_1s_ease_both] motion-safe:[animation-delay:.5s]">
            <p className="mx-auto max-w-[520px] text-base leading-[1.75] text-white">
              Bring the care you put into your business to your social media.
              I create the content and build the plan, so you can spend less
              time wondering what to post.
            </p>
            <a
              href={contact}
              className="group mt-8 inline-flex min-h-14 items-center justify-between gap-9 bg-brand-accent px-6 text-xs font-bold text-black transition-colors hover:bg-white focus-visible:outline-offset-[6px] max-[640px]:w-full max-[640px]:max-w-[330px]"
            >
              LET’S TALK ABOUT YOUR SOCIALS
              <Arrow className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 px-[var(--page-gutter)] pt-5 pb-[30px] motion-safe:animate-[fade-arrive_1s_ease_both] motion-safe:[animation-delay:.65s]   max-[640px]:pt-2.5 max-[640px]:pb-6">
          {/* <p className="text-[9px] uppercase tracking-[0.18em] text-white max-[640px]:max-w-[130px] max-[640px]:text-[8px] max-[640px]:leading-[1.7]">
            Built on creativity. Backed by strategy.
          </p> */}
          <div className="flex items-center gap-3 max-[640px]:gap-2">
            <span
              className="h-px w-8 bg-brand-accent max-[640px]:w-4"
              aria-hidden="true"
            />
            <p className="text-[10px] uppercase leading-[1.7] tracking-[0.12em] max-[640px]:text-[8px]">
              Parker Wheatley
              <br />
              <span className="text-white">Your creative partner</span>
            </p>
          </div>
        </div>
      </section>

      <div className="group/ticker overflow-hidden bg-brand-accent py-5 text-black">
        <p className="sr-only">
          Social media management, content creation, and brand strategy.
        </p>
        <div
          className="flex w-max motion-safe:animate-[ticker_40s_linear_infinite] group-hover/ticker:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {[0, 1, 2, 3].map((copy) => (
            <div
              className="service-group flex shrink-0 items-center"
              key={copy}
            >
              {[
                "Social media management",
                "Content creation",
                "Brand strategy",
              ].map((service) => (
                <span
                  key={service}
                  className="flex shrink-0 items-center gap-10 pr-10 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm"
                >
                  {service}
                  <Asterisk className="h-4 w-4 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
