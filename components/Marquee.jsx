"use client";



export default function Marquee() {
  // const [paused, setPaused] = useState(false);

  return (
    <div className="group/marquee relative overflow-hidden bg-ink py-[18px] text-brand-accent">
      <p className="sr-only">A plan for your socials. Space for your business.</p>
      <div
        className="flex w-max motion-safe:animate-[ticker_36s_linear_infinite] group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] group-data-[paused=true]/marquee:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            className="flex min-w-screen shrink-0 items-center justify-around"
          >
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="flex shrink-0 items-center gap-12 pr-12 text-xs leading-none font-bold tracking-[.09em] whitespace-nowrap uppercase sm:text-sm"
              >
                A plan for your socials. Space for your business.
                <span className="text-xl leading-none" aria-hidden="true">
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* <button type="button" onClick={() => setPaused(current => !current)} aria-label={paused ? 'Resume moving text' : 'Pause moving text'} aria-pressed={paused} className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-brand-accent/40 bg-ink text-sm text-brand-accent transition-colors hover:bg-brand-accent hover:text-ink motion-reduce:hidden">
        <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>
      </button> */}
    </div>
  );
}
