// Small, static illustrations using the same ink and accent as the portfolio camera.
export default function SectionIllustration({ variant, className = '' }) {
  return (
    <svg viewBox="0 0 120 108" fill="none" aria-hidden="true" focusable="false" className={`pointer-events-none shrink-0 text-ink ${className}`} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {variant === 'envelope' ? (
        <>
          <path d="m14 45 44-31 47 31-5 47-86-3Z" fill="var(--color-brand-accent)" />
          <path d="m29 52-2-38 61-4 3 44" fill="white" />
          <path d="m39 27 35-2m-34 12 24-2" />
          <path d="m14 45 44 28 47-28-5 47-86-3Z" fill="white" />
          <path d="m15 88 30-25m25 1 30 27" />
          <path d="m89 11 6-7m4 19 11-2M14 28l-7-5" />
          <path d="m36 99 48 1" strokeOpacity=".25" />
        </>
      ) : (
        <>
          <path d="m47 43 59 3-2 39-13-1 3 14-22-15-28-2Z" fill="var(--color-brand-accent)" />
          <path d="m14 15 70-3 3 45-36 2-19 17 2-16-17 1Z" fill="white" />
          <path d="m28 30 43-2m-42 13 29-2m8 29 24 1" />
          <path d="m97 20 6-7m-2 18 11-1M13 77l-6 5" />
          <path d="m30 98 38 2" strokeOpacity=".25" />
        </>
      )}
    </svg>
  );
}
