'use client';

import RevealLine from './RevealLine';

import { useState } from 'react';
import BackgroundVideo from './BackgroundVideo';
const styles = {
  section: 'section-space relative isolate overflow-hidden text-brand-accent',
  background: 'absolute inset-0 -z-2 size-full object-cover object-[center_55%]',
  shade: 'absolute inset-0 -z-1 bg-[#090c08a6]',
  inner: 'mx-auto max-w-[1180px] text-center [&_h2]:text-[clamp(44px,5.5vw,78px)] [&_h2]:leading-[1.05] [&_h2]:font-bold [&_h2]:tracking-[-.055em] [&_h2_em]:font-editorial [&_h2_em]:font-normal max-[760px]:[&_h2]:text-[46px]',
  eyebrow: 'mb-[25px] text-[10px] tracking-[.18em] uppercase',
  carousel: 'mt-12 grid grid-cols-[48px_minmax(0,720px)_48px] items-center justify-center gap-[42px] max-[760px]:mt-10 max-[760px]:grid-cols-2 max-[760px]:gap-[22px]',
  arrow: 'h-[46px] w-[46px] cursor-pointer rounded-full bg-brand-accent text-[23px] text-ink transition-[transform,background] duration-200 hover:scale-[1.08] hover:bg-white motion-reduce:transition-none max-[760px]:justify-self-end max-[760px]:last:justify-self-start',
  frame: 'rounded-3xl bg-olive review-frame p-3.5 max-[760px]:col-span-full max-[760px]:row-start-1 max-[760px]:rounded-[19px] max-[760px]:p-2.5',
  card: 'flex min-h-[400px] items-center rounded-[14px] bg-white px-12 pt-[38px] pb-[42px] text-left text-ink [&_blockquote]:text-[clamp(18px,1.8vw,24px)] [&_blockquote]:leading-[1.55] [&_blockquote]:tracking-normal max-[760px]:min-h-[430px] max-[760px]:rounded-[10px] max-[760px]:px-[25px] max-[760px]:py-[30px] max-[760px]:[&_blockquote]:text-lg',
  quoteContent: 'w-full',
  quoteMark: 'mb-5 block font-editorial text-[64px] leading-[.7] text-[#667345]',
  author: 'mt-7 text-[11px] font-bold tracking-[.11em] uppercase',
  source: 'mt-[7px] text-[11px] text-[#686c5f]',
  pagination: 'mt-[23px] flex items-center justify-center gap-[5px] max-[760px]:mt-3 [&_button]:grid [&_button]:h-8 [&_button]:w-8 [&_button]:cursor-pointer [&_button]:place-items-center [&_button_span]:size-[7px] [&_button_span]:rounded-full [&_button_span]:bg-white/45 [&_button[aria-current]_span]:bg-brand-accent',
  count: 'ml-4 font-mono text-[10px] tracking-[.15em]',
};

// Complete reviews with named authors, transcribed from the supplied Instagram stories.
const testimonials = [
  {
    "quote": "Parker makes the entire process feel so personal. He takes the time to understand our business, listens to our vision, and brings ideas we wouldn’t have thought of ourselves. He’s creative, dependable, and truly such a joy to work with!",
    "author": "Emily",
    "source": "Shared on Instagram"
  },
  {
    "quote": "Social media used to feel like another thing on our never ending todo list. Having Parker manage our content has given us so much time back. Everything is organized, intentional, and consistently reflects our brand.",
    "author": "Maddie",
    "source": "Shared on Instagram"
  },
  {
    "quote": "You did an incredible job Parker. You should be so proud of what you created and how professional and detailed your products are! I am thoroughly impressed! Thank you!!!",
    "author": "Claire",
    "source": "Shared on Instagram"
  },
  {
    "quote": "Also, I have received so many messages and stories!!! People are loving it. You have done such an incredible job Parker. You are a fucking kick ass social media manager!!!",
    "author": "Amanda",
    "source": "Shared on Instagram"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = testimonials[active];
  const change = direction => setActive(current => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title" aria-roledescription="carousel">
      <BackgroundVideo
        src="/videos/b-roll/sunlit-studio-window-web.mp4"
        poster="/images/portraits/shot6-web.webp"
        className={styles.background}
      />
      <div className={styles.shade} />
      <div data-motion="intro" className={styles.inner}>
        <p data-text="eyebrow" className={styles.eyebrow}>04 / Client feedback</p>
        <h2 data-text="heading" id="testimonials-title"><RevealLine>What it’s like to</RevealLine><RevealLine index={1}><em>work together.</em></RevealLine></h2>
        <div className={styles.carousel}>
          <button type="button" className={styles.arrow} onClick={() => change(-1)} aria-label="Previous testimonial" aria-controls="testimonial-quote">←</button>
          <div data-motion="review" className={styles.frame}>
            <div id="testimonial-quote" className={styles.card} aria-live="polite" aria-atomic="true">
              <div key={active} className={styles.quoteContent}>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
                <blockquote className="font-editorial">{review.quote}</blockquote>
                <p className={styles.author}>{review.author}</p>
                <p className={styles.source}>{review.source}</p>
              </div>
            </div>
          </div>
          <button type="button" className={styles.arrow} onClick={() => change(1)} aria-label="Next testimonial" aria-controls="testimonial-quote">→</button>
        </div>
        <div className={styles.pagination}>
          {testimonials.map((item, index) => <button type="button" key={item.author} aria-label={`Show testimonial ${index + 1}`} aria-current={index === active ? 'true' : undefined} onClick={() => setActive(index)}><span /></button>)}
          <span className={styles.count} aria-hidden="true">0{active + 1} / 0{testimonials.length}</span>
        </div>
      </div>
    </section>
  );
}