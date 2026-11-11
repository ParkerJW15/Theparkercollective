import SiteNavigation from "./SiteNavigation";
import Image from "next/image";
import Link from "next/link";
const instagram = "https://www.instagram.com/theparkercollectiveco/";
const contact = "#inquiry";
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

export default function SiteHeader() {
  return (
    <header
      data-site-header
      className="relative z-10 text-white flex items-center justify-between gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] px-[var(--page-gutter)] pt-9 pb-[30px] max-[900px]:py-[30px] max-[640px]:py-[27px]"
    >
      <Link
        href="/"
        className="block w-[140px] min-w-0 justify-self-start max-[640px]:w-[100px]"
        aria-label="The Parker Collective home"
      >
        <Image
          src="/images/brand/parker-collective-logo-stacked-accent.webp"
          alt="The Parker Collective"
          width={740}
          height={420}
          sizes="(max-width: 640px) 100px, 140px"
          preload
          className="block h-auto w-full max-w-[100px] lg:max-w-[80px]"
        />
      </Link>
      <p className="hidden flex-col items-center gap-1 text-center text-[10px] leading-[1.4] tracking-[0.2em] text-white uppercase lg:flex">
        {/* <span>Independent spirit.</span>
            <span>Louisville, Kentucky.</span> */}
      </p>
      <div className="flex items-center justify-self-end gap-6 max-[640px]:gap-4">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Parker Collective on Instagram"
          className="nav-instagram hidden size-11 items-center justify-center text-white transition-colors hover:text-brand-accent sm:inline-flex"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
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
