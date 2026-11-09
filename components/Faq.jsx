'use client';

import RevealLine from './RevealLine';

import { useState } from 'react';
const styles = {
  section: 'section-inset section-bottom bg-white text-ink',
  inner: 'mx-auto grid max-w-[1180px] grid-cols-[minmax(0,.8fr)_minmax(0,1.35fr)] items-start gap-[clamp(48px,7vw,108px)] border-t border-[#cccec3] pt-[var(--section-space)] max-[1000px]:gap-10 max-[760px]:max-w-[520px] max-[760px]:grid-cols-1 max-[760px]:gap-[38px]',
  eyebrow: 'mb-6 flex items-center gap-[18px] text-[10px] font-semibold tracking-[.18em] text-olive uppercase [&>span]:text-[#686c5f] max-[760px]:mb-6 max-[760px]:text-[9px]',
  title: 'm-0 text-[clamp(46px,4.6vw,66px)] leading-[.98] font-bold tracking-[-.065em] uppercase [&_[data-emphasis]]:shadow-[inset_0_-.16em_0_#e8ff8c] max-[1000px]:text-[46px] max-[760px]:text-[clamp(48px,12vw,62px)]',
  description: 'mt-[26px] text-[15px] leading-[1.7] text-muted max-[760px]:mt-[22px] max-[760px]:max-w-[290px]',
  desktopBreak: 'max-[1000px]:hidden',
  contact: 'mt-8 max-[760px]:mt-[25px] [&_p]:mb-3 [&_p]:text-xs [&_p]:text-[#686c5f] [&_a]:inline-flex [&_a]:min-h-10 [&_a]:items-center [&_a]:justify-between [&_a]:gap-10 [&_a]:border-b [&_a]:border-ink [&_a]:pb-2 [&_a]:text-[13px] [&_a]:font-semibold [&_a:hover]:border-[#657438] [&_a:hover]:text-olive [&_a:focus-visible]:outline-olive',
  questions: 'border-t border-[#aeb2a4]',
  item: 'group/faq border-b border-[#cccec3]',
  question: 'grid min-h-[91px] w-full cursor-pointer grid-cols-[24px_minmax(0,1fr)_32px] items-center gap-x-[18px] py-[23px] text-left text-lg leading-[1.4] font-medium tracking-[-.025em] text-inherit focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-olive aria-expanded:font-semibold max-[1000px]:gap-x-3 max-[1000px]:text-base max-[760px]:min-h-[86px] max-[760px]:grid-cols-[20px_minmax(0,1fr)_30px] max-[760px]:gap-2.5 max-[760px]:py-[22px]',
  number: 'font-mono text-[10px] tracking-[.02em] text-[#717666]',
  symbol: "relative size-8 rounded-full border border-[#b6bbac] transition-[background,border-color] duration-200 before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-3 before:-translate-1/2 before:bg-ink before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-3 after:w-px after:-translate-1/2 after:bg-ink after:transition-[height] after:duration-200 after:content-[''] group-data-[open=true]/faq:border-transparent group-data-[open=true]/faq:bg-brand-accent group-data-[open=true]/faq:after:h-0 group-hover/faq:bg-brand-accent motion-reduce:transition-none motion-reduce:after:transition-none max-[760px]:size-[30px]",
  answerPanel: 'grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(.22,.68,0,1)] group-data-[open=true]/faq:grid-rows-[1fr] group-data-[open=true]/faq:opacity-100 motion-reduce:transition-none',
  answerClip: 'min-h-0 overflow-hidden',
  answer: 'pr-[50px] pb-[27px] pl-[42px] text-[15px] leading-[1.8] text-muted max-[1000px]:pr-8 max-[1000px]:pl-9 max-[1000px]:text-sm max-[760px]:pr-2.5 max-[760px]:pb-[25px] max-[760px]:pl-[30px]',
};

// Adapted from Parker's supplied Instagram FAQ carousel.
const faqs = [
  {
    question: 'What can you do for me and my business?',
    answer: 'I can audit your account to understand what’s working and where there’s room to improve, then create a social media strategy tailored to your goals. I also plan and publish content, build monthly content calendars, and offer one-off or regular content shoots.',
  },
  {
    question: 'What does your onboarding process look like?',
    answer: 'It starts with a short inquiry form so I can learn about your business and goals. Once I’ve received your answers, we’ll arrange a discovery call to talk through the details and how we can work together.',
  },
  {
    question: 'Do you come to my business to film?',
    answer: 'Yes! Depending on your package, you’ll receive one or two content shoots a month. I’ll come to your business and film for a couple of hours. You’re welcome to send me any content you already have, too.',
  },
  {
    question: 'How often will you post for me?',
    answer: 'That depends on your goals and the package you choose. We’ll work out what you want to achieve, then agree on a posting schedule that fits your business.',
  },
  {
    question: 'Do you offer packages?',
    answer: 'Yes! I offer three package tiers: Essential, Elevated, and Elite. Each offers a different level of support, so we can find the option that fits your business needs and budget.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div data-motion="intro" className={styles.introduction}>
          <p data-text="eyebrow" className={styles.eyebrow}><span aria-hidden="true">06 /</span> The details</p>
          <h2 data-text="heading" id="faq-title" className={styles.title}><RevealLine>Before we</RevealLine><RevealLine index={1}><span data-emphasis>get started.</span></RevealLine></h2>
          <p className={styles.description}>A little more about the process,<br className={styles.desktopBreak} /> the packages, and working with me.</p>
          <div className={styles.contact}>
            <p>Something else on your mind?</p>
            <a href="mailto:theparkercollective.co@gmail.com">
              Ask Parker
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
          </div>
        </div>

        <div data-motion="faq" className={styles.questions}>
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className={styles.item} data-open={openIndex === index}>
              <h3>
              <button type="button" className={styles.question} id={`faq-question-${index}`} aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(current => current === index ? null : index)}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{question}</span>
                <span className={styles.symbol} aria-hidden="true" />
              </button>
              </h3>
              <div className={styles.answerPanel} id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={openIndex !== index} inert={openIndex !== index}>
                <div className={styles.answerClip}><div className={styles.answer}><p>{answer}</p></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
