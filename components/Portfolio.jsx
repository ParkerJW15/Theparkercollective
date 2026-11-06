'use client';

import { useEffect, useRef, useState } from 'react';
const styles = {
  section: 'bg-white px-[6vw] pt-[100px] pb-20 text-ink [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-ink max-[900px]:px-6 max-[900px]:pt-20 max-[900px]:pb-16 max-[480px]:pt-16',
  inner: 'mx-auto max-w-[1180px] [&_h2]:text-center [&_h2]:text-[clamp(44px,5.2vw,76px)] [&_h2]:leading-[.99] [&_h2]:font-bold [&_h2]:tracking-[-.065em] [&_h2]:uppercase [&_h2_span]:font-editorial [&_h2_span]:font-normal [&_h2_span]:tracking-[-.055em] [&_h2_span]:normal-case [&_h2_span]:italic max-[480px]:[&_h2]:text-[43px]',
  eyebrow: 'mb-[25px] text-center text-[10px] font-semibold tracking-[.17em] uppercase',
  description: 'mt-[23px] text-center text-[15px] leading-[1.6]',
  grid: 'mt-12 grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[900px]:gap-x-[18px] max-[900px]:gap-y-[30px] max-[480px]:mt-8 max-[480px]:gap-x-3 max-[480px]:gap-y-7',
  clip: 'm-0 min-w-0 [&_figcaption]:mt-4 [&_figcaption]:flex [&_figcaption]:flex-col [&_figcaption]:gap-1.5 [&_figcaption>span:first-child]:text-xs [&_figcaption>span:first-child]:font-bold [&_figcaption>span:first-child]:tracking-[.05em] [&_figcaption>span:first-child]:uppercase [&_figcaption>span:last-child]:text-[11px] [&_figcaption>span:last-child]:text-olive max-[480px]:[&_figcaption>span]:text-[10px] max-[480px]:[&_figcaption>span:last-child]:leading-[1.5]',
  videoFrame: 'aspect-[3/4] overflow-hidden bg-[#30372a] [&_video]:block [&_video]:h-full [&_video]:w-full [&_video]:object-cover max-[480px]:aspect-[9/16]',
  footer: 'mt-10 flex flex-wrap items-center justify-center gap-[26px] max-[480px]:gap-4 [&_a]:inline-flex [&_a]:min-h-[54px] [&_a]:items-center [&_a]:justify-between [&_a]:gap-[38px] [&_a]:bg-ink [&_a]:px-6 [&_a]:py-[18px] [&_a]:text-[11px] [&_a]:font-semibold [&_a]:tracking-[.04em] [&_a]:text-white [&_a]:uppercase [&_a_span]:text-[22px] [&_a_span]:leading-none [&_button]:inline-flex [&_button]:min-h-11 [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-3 [&_button]:border-b [&_button]:border-ink/35 [&_button]:text-[11px]',
};

const clips = [
  { file: 'aesthetics-client-consultation', title: 'The conversation', description: 'Aesthetics consultation' },
  { file: 'facial-device-treatment', title: 'The experience', description: 'Treatment in progress' },
  { file: 'facial-injection-close-up', title: 'The details', description: 'A closer look' },
  { file: 'jawline-injection-treatment', title: 'The process', description: 'Behind the treatment' },
];

function PortfolioVideo({ clip, paused }) {
  const video = useRef(null);
  useEffect(() => {
    const player = video.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !paused && !motion.matches) {
        if (!player.getAttribute('src')) player.src = `/videos/portfolio/${clip.file}.mp4`;
        player.play().catch(() => {});
      } else player.pause();
    }, { threshold: 0.15 });
    const stopForMotion = () => { if (motion.matches) player.pause(); };
    observer.observe(player);
    motion.addEventListener('change', stopForMotion);
    return () => { observer.disconnect(); motion.removeEventListener('change', stopForMotion); player.pause(); };
  }, [clip.file, paused]);

  function loadForManualPlay() {
    if (!video.current.getAttribute('src')) {
      video.current.src = `/videos/portfolio/${clip.file}.mp4`;
      video.current.play().catch(() => {});
    }
  }

  return (
    <figure className={styles.clip}>
      <div className={styles.videoFrame}>
        <video ref={video} muted loop playsInline controls preload="none" poster={`/images/portfolio/${clip.file}.jpg`} aria-label={clip.description} onPointerDown={loadForManualPlay} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') loadForManualPlay(); }} />
      </div>
      <figcaption><span>{clip.title}</span><span>{clip.description}</span></figcaption>
    </figure>
  );
}

export default function Portfolio() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>03 / In the frame</p>
        <h2 id="work-title">Real moments.<br /><span>Made to connect.</span></h2>
        <p className={styles.description}>A glimpse of the content behind the brands.</p>
        <div className={styles.grid}>{clips.map(clip => <PortfolioVideo key={clip.file} clip={clip} paused={paused} />)}</div>
        <div className={styles.footer}>
          <a href="#inquiry">Let’s create yours <span aria-hidden="true">↗</span></a>
          <button type="button" onClick={() => setPaused(current => !current)} aria-pressed={paused}>{paused ? 'Resume videos' : 'Pause all videos'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>
        </div>
      </div>
    </section>
  );
}
