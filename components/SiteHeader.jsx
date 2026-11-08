import SiteNavigation from './SiteNavigation';
import Link from 'next/link';
const instagram = 'https://www.instagram.com/theparkercollectiveco/';
const contact = '#inquiry';
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

export default function SiteHeader() {
  return (
        <header data-site-header className="relative z-10 text-white flex items-center justify-between gap-5 px-[var(--page-gutter)] pt-9 pb-[30px] max-[900px]:py-[30px] max-[640px]:py-[27px]">
          <Link
            href="/"
            className="block text-[26px] leading-[.86] font-extrabold tracking-[-.065em] [&>span]:flex max-[640px]:text-[23px]"
            aria-label="The Parker Collective home"
          >
            <span>the parker</span>
            <span className="flex items-center gap-2">
              collective
              <Asterisk className="h-4 w-4 text-brand-accent" />
            </span>
          </Link>
          <p className="hidden text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white lg:block">
            Independent spirit.
            <br />
            Louisville, Kentucky.
          </p>
          <div className="flex items-center gap-6 max-[640px]:gap-4">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-instagram hidden items-center gap-2 text-xs text-white transition-colors hover:text-brand-accent sm:flex"
            >
              Instagram <Arrow className="h-3.5 w-3.5" />
            </a>
            <a
              href={contact}
              className="nav-contact group inline-flex items-center gap-5 border-b border-white pb-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              Let’s talk{" "}
              <Arrow className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <SiteNavigation />
          </div>
        </header>
  );
}
