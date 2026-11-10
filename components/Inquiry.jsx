'use client';

import RevealLine from './RevealLine';
import TypewriterText from './TypewriterText';

import { useRef, useState } from 'react';
import { sendInquiry } from '@/lib/emailjs.mjs';
import BackgroundVideo from './BackgroundVideo';
import Image from 'next/image';
const styles = {
  section: 'section-space relative isolate overflow-hidden rounded-b-[48px] bg-ink text-white max-[760px]:rounded-b-[30px]',
  poster: 'absolute inset-0 -z-3 h-full w-full object-cover object-center',
  video: 'absolute inset-0 -z-2 h-full w-full object-cover object-center',
  overlay: 'absolute inset-0 -z-1 bg-[linear-gradient(90deg,#090c08c9,#090c088c)]',
  inner: 'mx-auto grid max-w-[1180px] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(40px,6vw,90px)] max-[900px]:max-w-[600px] max-[900px]:grid-cols-1 max-[900px]:gap-12',
  intro: '[&_h2]:text-[clamp(48px,5.5vw,80px)] [&_h2]:leading-[.99] [&_h2]:font-bold [&_h2]:tracking-[-.065em] [&_h2]:uppercase [&_h2_[data-emphasis]]:text-brand-accent max-[900px]:[&_h2]:text-[clamp(52px,10vw,76px)]',
  eyebrow: 'mb-6 text-[10px] tracking-[.16em] text-brand-accent uppercase',
  description: 'font-editorial mt-8 max-w-[345px] text-base leading-[1.75] text-[#eceee5] max-[900px]:max-w-[400px]',
  email: 'mt-8 inline-flex items-center gap-4 border-b border-white/45 pb-2.5 text-[13px] wrap-anywhere max-[480px]:text-xs',
  form: 'border border-white/40 bg-[#f2f1ebf5] p-[clamp(26px,3.3vw,48px)] text-ink max-[900px]:p-8 max-[480px]:p-[26px]',
  formHeading: 'text-[30px] leading-[1.1] font-bold tracking-[-.04em]',
  requiredNote: 'font-editorial mt-3 text-[11px] text-[#5a6050]',
  fields: 'mt-8 grid grid-cols-2 gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-6 [&_label]:flex [&_label]:flex-col [&_label]:gap-2.5 [&_label]:text-[11px] [&_label]:leading-[1.5] [&_label]:font-semibold [&_:is(input,select,textarea)]:min-w-0 [&_:is(input,select,textarea)]:w-full [&_:is(input,select,textarea)]:rounded-none [&_:is(input,select,textarea)]:border-0 [&_:is(input,select,textarea)]:border-b [&_:is(input,select,textarea)]:border-[#a4ab98] [&_:is(input,select,textarea)]:bg-transparent [&_:is(input,select,textarea)]:py-2.5 [&_:is(input,select,textarea)]:text-sm [&_:is(input,select,textarea)]:leading-[1.5] [&_:is(input,select,textarea)]:font-normal [&_:is(input,select,textarea)]:text-ink [&_input::placeholder]:text-[#6d7363] [&_textarea::placeholder]:text-[#6d7363] [&_textarea]:min-h-[110px] [&_textarea]:max-h-[320px] [&_textarea]:resize-y [&_select]:min-h-11 [&_option]:bg-white [&_option]:text-ink [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-olive max-[480px]:[&_:is(input,select,textarea)]:text-base',
  full: 'col-span-full',
  deliveryNote: 'font-editorial mt-[25px] text-[11px] leading-[1.5] text-[#5a6050]',
  submit: 'mx-auto mt-3.5 flex min-h-[54px] w-3/5 cursor-pointer items-center justify-center gap-2 bg-brand-accent px-5 py-4 text-[11px] font-bold tracking-[.04em] text-ink uppercase transition-colors hover:bg-[#d5ed75] max-[760px]:px-3 max-[760px]:text-center max-[480px]:[&>span]:hidden focus-visible:outline-ink motion-reduce:transition-none [&>span]:text-2xl [&>span]:leading-none',
  status: 'font-editorial mt-[18px] text-xs leading-[1.6] wrap-anywhere [&_a]:underline',
};

export default function Inquiry() {
  const [status, setStatus] = useState('idle');
  const requestPending = useRef(false);

  async function submitInquiry(event) {
    event.preventDefault();
    if (requestPending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    requestPending.current = true;
    setStatus('sending');
    try {
      await sendInquiry(data);
      form.reset();
      setStatus('success');
    } catch {
      // Keep the visitor's entries so they can retry or use the direct email link.
      setStatus('error');
    } finally {
      requestPending.current = false;
    }
  }

  return (
    <section id="inquiry" className={styles.section} aria-labelledby="inquiry-title">
      <Image src="/images/backgrounds/inquiry-poster.jpg" alt="" fill sizes="100vw" className={styles.poster} />
      <BackgroundVideo src="/videos/b-roll/photographer-shadow-on-chair.mp4" className={styles.video} />
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div data-motion="inquiry" className={styles.intro}>
          <p data-text="eyebrow" className={styles.eyebrow}>07 / Work with Parker</p>
          <h2 data-text="heading" id="inquiry-title"><RevealLine>Let’s talk</RevealLine><RevealLine index={1}>about your</RevealLine><RevealLine index={2}><span data-emphasis>socials.</span></RevealLine></h2>
          <p className={styles.description}><TypewriterText>Tell me what you do and where you need support. We’ll start with your goals, talk through your options, and find the right way to work together.</TypewriterText></p>
          <a className={styles.email} href="mailto:theparkercollective.co@gmail.com">theparkercollective.co@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <form data-motion="form" className={styles.form} onSubmit={submitInquiry} aria-busy={status === 'sending'}>
          <p data-text="heading-copy" className={styles.formHeading}>Tell me about your business.</p>
          <p className={styles.requiredNote}>Not sure which package fits? We can work that out together.<br />Fields marked * are required.</p>
          <fieldset className={styles.fields} disabled={status === 'sending'}>
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
          </fieldset>
          <p className={styles.deliveryNote}>Your inquiry goes straight to Parker. He’ll reply by email.</p>
          <button type="submit" className={`${styles.submit} disabled:cursor-wait disabled:opacity-60`} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send inquiry'} <span aria-hidden="true">↗</span>
          </button>
          <div role="status" aria-live="polite" aria-atomic="true">
            {status === 'success' && <p className={styles.status}>Thanks! Your inquiry has been sent. Parker will be in touch by email.</p>}
            {status === 'error' && <p className={styles.status}>Your inquiry couldn’t be sent. Your details are still here—please try again, or email <a href="mailto:theparkercollective.co@gmail.com">theparkercollective.co@gmail.com</a>.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
