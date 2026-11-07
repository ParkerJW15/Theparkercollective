'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const styles = {
  section: 'relative isolate overflow-hidden rounded-b-[48px] bg-ink px-[6vw] py-[110px] text-white max-[900px]:px-6 max-[900px]:py-20 max-[760px]:rounded-b-[30px]',
  poster: 'absolute inset-0 -z-3 h-full w-full object-cover object-center',
  video: 'absolute inset-0 -z-2 h-full w-full object-cover object-center',
  overlay: 'absolute inset-0 -z-1 bg-[linear-gradient(90deg,#090c08c9,#090c088c)]',
  inner: 'mx-auto grid max-w-[1180px] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(40px,6vw,90px)] max-[900px]:max-w-[600px] max-[900px]:grid-cols-1 max-[900px]:gap-[42px]',
  intro: '[&_h2]:text-[clamp(48px,5.5vw,80px)] [&_h2]:leading-[.99] [&_h2]:font-bold [&_h2]:tracking-[-.065em] [&_h2]:uppercase [&_h2_span]:text-brand-accent max-[900px]:[&_h2]:text-[clamp(52px,10vw,76px)]',
  eyebrow: 'mb-[35px] text-[10px] tracking-[.16em] text-brand-accent uppercase',
  description: 'mt-7 max-w-[345px] text-base leading-[1.75] text-[#eceee5] max-[900px]:max-w-[400px]',
  email: 'mt-8 inline-flex items-center gap-4 border-b border-white/45 pb-2.5 text-[13px] wrap-anywhere max-[480px]:text-xs',
  form: 'border border-white/40 bg-[#f2f1ebf5] p-[clamp(26px,3.3vw,48px)] text-ink max-[900px]:p-8 max-[480px]:p-[26px]',
  formHeading: 'text-[30px] leading-[1.1] font-bold tracking-[-.04em]',
  requiredNote: 'mt-3 text-[11px] text-[#5a6050]',
  fields: 'mt-8 grid grid-cols-2 gap-x-[22px] gap-y-[26px] max-[480px]:grid-cols-1 max-[480px]:gap-[23px] [&_label]:flex [&_label]:flex-col [&_label]:gap-2.5 [&_label]:text-[11px] [&_label]:leading-[1.5] [&_label]:font-semibold [&_:is(input,select,textarea)]:min-w-0 [&_:is(input,select,textarea)]:w-full [&_:is(input,select,textarea)]:rounded-none [&_:is(input,select,textarea)]:border-0 [&_:is(input,select,textarea)]:border-b [&_:is(input,select,textarea)]:border-[#a4ab98] [&_:is(input,select,textarea)]:bg-transparent [&_:is(input,select,textarea)]:py-2.5 [&_:is(input,select,textarea)]:text-sm [&_:is(input,select,textarea)]:leading-[1.5] [&_:is(input,select,textarea)]:font-normal [&_:is(input,select,textarea)]:text-ink [&_input::placeholder]:text-[#6d7363] [&_textarea::placeholder]:text-[#6d7363] [&_textarea]:min-h-[110px] [&_textarea]:max-h-[320px] [&_textarea]:resize-y [&_select]:min-h-11 [&_option]:bg-paper [&_option]:text-ink [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-olive max-[480px]:[&_:is(input,select,textarea)]:text-base',
  full: 'col-span-full',
  deliveryNote: 'mt-[25px] text-[11px] leading-[1.5] text-[#5a6050]',
  submit: 'mt-3.5 flex min-h-[54px] w-full cursor-pointer items-center justify-between gap-5 bg-brand-accent px-5 py-4 text-[11px] font-bold tracking-[.04em] text-ink uppercase transition-colors hover:bg-[#d5ed75] focus-visible:outline-ink motion-reduce:transition-none [&>span]:text-2xl [&>span]:leading-none',
  status: 'mt-[18px] text-xs leading-[1.6] wrap-anywhere [&_a]:underline',
};

export default function Inquiry() {
  const section = useRef(null);
  const video = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);

  useEffect(() => {
    const player = video.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChange = () => { if (reducedMotion.matches) player.pause(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reducedMotion.matches) {
        if (!player.getAttribute('src')) player.src = '/videos/laptop-video-editing-web.mp4';
        player.play().catch(() => {});
      } else player.pause();
    }, { rootMargin: '100px' });
    observer.observe(section.current);
    reducedMotion.addEventListener('change', motionChange);
    return () => { observer.disconnect(); reducedMotion.removeEventListener('change', motionChange); player.pause(); };
  }, []);

  function openEmailDraft(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Business: ${data.get('business')}`,
      `Website / Instagram: ${data.get('social') || 'Not provided'}`,
      `Interested in: ${data.get('package')}`,
      '', 'About my business and goals:', data.get('message'),
    ].join('\n');
    window.location.href = `mailto:theparkercollective.co@gmail.com?subject=${encodeURIComponent(`Website inquiry — ${data.get('business')}`)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <section ref={section} id="inquiry" className={styles.section} aria-labelledby="inquiry-title">
      <Image src="/images/backgrounds/inquiry-poster.jpg" alt="" fill sizes="100vw" className={styles.poster} />
      <video ref={video} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} className={styles.video} onError={() => setVideoFailed(true)} />
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>07 / Your next chapter</p>
          <h2 id="inquiry-title">Good things<br />start with<br /><span>a hello.</span></h2>
          <p className={styles.description}>Tell me a little about your business, your big ideas, and where you’d like to go. Let’s find your kind of social.</p>
          <a className={styles.email} href="mailto:theparkercollective.co@gmail.com">theparkercollective.co@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <form className={styles.form} onSubmit={openEmailDraft}>
          <p className={styles.formHeading}>Let’s work together.</p>
          <p className={styles.requiredNote}>Fields marked * are required.</p>
          <div className={styles.fields}>
            <label>Your name *<input name="name" autoComplete="name" required maxLength={100} placeholder="First and last name" /></label>
            <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@yourbusiness.com" /></label>
            <label>Business name *<input name="business" autoComplete="organization" required maxLength={120} placeholder="Your business" /></label>
            <label>Website or Instagram<input name="social" maxLength={200} placeholder="@yourbrand or website URL" /></label>
            <label className={styles.full}>
              What are you interested in? *
              <select name="package" required defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Essential</option>
                <option>Elevated</option>
                <option>Elite</option>
                <option>Content creation</option>
                <option>I’m not sure yet — let’s chat</option>
              </select>
            </label>
            <label className={styles.full}>Tell me about your business and goals *<textarea name="message" required rows={4} maxLength={1200} placeholder="What do you do, and what would you love some support with?" /></label>
          </div>
          <p className={styles.deliveryNote}>Your email app will open with your inquiry ready to send.</p>
          <button type="submit" className={styles.submit}>Continue by email <span aria-hidden="true">↗</span></button>
          {draftOpened && <p className={styles.status} role="status">Your inquiry hasn’t been sent yet. Send the draft in your email app. If it didn’t open, email <a href="mailto:theparkercollective.co@gmail.com">theparkercollective.co@gmail.com</a>.</p>}
        </form>
      </div>
    </section>
  );
}
