'use client';

import { useState } from 'react';
import Image from 'next/image';
const styles = {
  section: 'relative isolate overflow-hidden px-[6vw] pt-[100px] pb-20 text-brand-accent max-[760px]:px-6 max-[760px]:pt-[72px] max-[760px]:pb-14',
  background: '-z-2 object-cover object-[center_55%]',
  shade: 'absolute inset-0 -z-1 bg-[#090c08a6]',
  inner: 'mx-auto max-w-[1100px] text-center [&_h2]:text-[clamp(44px,5.5vw,78px)] [&_h2]:leading-[1.05] [&_h2]:font-bold [&_h2]:tracking-[-.055em] [&_h2_em]:font-editorial [&_h2_em]:font-normal max-[760px]:[&_h2]:text-[46px]',
  eyebrow: 'mb-[25px] text-[10px] tracking-[.18em] uppercase',
  carousel: 'mt-[46px] grid grid-cols-[48px_minmax(0,720px)_48px] items-center justify-center gap-[42px] max-[760px]:mt-8 max-[760px]:grid-cols-2 max-[760px]:gap-[22px]',
  arrow: 'h-[46px] w-[46px] cursor-pointer rounded-full bg-brand-accent text-[23px] text-ink transition-[transform,background] duration-200 hover:scale-[1.08] hover:bg-white motion-reduce:transition-none max-[760px]:justify-self-end max-[760px]:last:justify-self-start',
  frame: 'rounded-3xl bg-olive bg-[conic-gradient(#e8ff8c_25%,transparent_0_50%,#e8ff8c_0_75%,transparent_0)] bg-size-[68px_68px] p-3.5 max-[760px]:col-span-full max-[760px]:row-start-1 max-[760px]:rounded-[19px] max-[760px]:bg-size-[48px_48px] max-[760px]:p-2.5',
  card: 'flex min-h-[340px] items-center rounded-[14px] bg-paper px-12 pt-[38px] pb-[42px] text-left text-ink [&_blockquote]:text-[clamp(18px,1.8vw,24px)] [&_blockquote]:leading-[1.55] [&_blockquote]:tracking-[-.025em] max-[760px]:min-h-[375px] max-[760px]:rounded-[10px] max-[760px]:px-[25px] max-[760px]:py-[30px] max-[760px]:[&_blockquote]:text-lg',
  quoteContent: 'w-full motion-safe:animate-[quote-arrive_.3s_ease-out]',
  quoteMark: 'mb-5 block font-editorial text-[64px] leading-[.7] text-[#667345]',
  author: 'mt-7 text-[11px] font-bold tracking-[.11em] uppercase',
  source: 'mt-[7px] text-[11px] text-[#686c5f]',
  pagination: 'mt-[23px] flex items-center justify-center gap-[5px] max-[760px]:mt-3 [&_button]:grid [&_button]:h-8 [&_button]:w-8 [&_button]:cursor-pointer [&_button]:place-items-center [&_button_span]:size-[7px] [&_button_span]:rounded-full [&_button_span]:bg-white/45 [&_button[aria-current]_span]:bg-brand-accent',
  count: 'ml-4 font-mono text-[10px] tracking-[.15em]',
};

// Verbatim excerpts from the client messages supplied by Hasnain.
// The collaboration announcement is not presented as a completed-work review.
const testimonials = [
  { quote: 'Also, I have received so many messages and texts from your IG posts and stories!!! People are loving it. You have done such an incredible job Parker.', author: 'Client feedback', source: 'Shared on Instagram' },
  { quote: 'So much gratitude to @parker.wheatley for making dreams come true and magic happen!', author: 'Curated Bronze', source: 'Shared on Instagram' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = testimonials[active];
  const change = direction => setActive(current => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title" aria-roledescription="carousel">
      <Image src="/images/portraits/shot6.jpeg" alt="" fill sizes="100vw" className={styles.background} />
      <div className={styles.shade} />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>04 / A few kind words</p>
        <h2 id="testimonials-title">Some client <em>love.</em></h2>
        <div className={styles.carousel}>
          <button type="button" className={styles.arrow} onClick={() => change(-1)} aria-label="Previous testimonial" aria-controls="testimonial-quote">←</button>
          <div className={styles.frame}>
            <div id="testimonial-quote" className={styles.card} aria-live="polite" aria-atomic="true">
              <div key={active} className={styles.quoteContent}>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
                <blockquote>{review.quote}</blockquote>
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
