'use client';

import RevealLine from './RevealLine';

import BackgroundVideo from './BackgroundVideo';
const styles = {
  section: 'section-space bg-white text-ink [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-ink',
  inner: 'mx-auto max-w-[1180px] [&_h2]:text-center [&_h2]:text-[clamp(44px,5.2vw,76px)] [&_h2]:leading-[.99] [&_h2]:font-bold [&_h2]:tracking-[-.065em] [&_h2]:uppercase [&_h2_em]:font-editorial [&_h2_em]:font-normal [&_h2_em]:tracking-[-.055em] [&_h2_em]:normal-case [&_h2_em]:italic max-[480px]:[&_h2]:text-[43px]',
  eyebrow: 'mb-[25px] text-center text-[10px] font-semibold tracking-[.17em] uppercase',
  description: 'mx-auto mt-6 max-w-[560px] text-center text-[15px] leading-[1.6]',
  grid: 'mt-16 grid grid-cols-4 items-start gap-5 max-[900px]:grid-cols-2 max-[900px]:gap-x-[18px] max-[900px]:gap-y-[30px] max-[480px]:mt-12 max-[480px]:gap-x-3 max-[480px]:gap-y-7',
  clip: 'm-0 min-w-0 even:mt-20 max-[900px]:even:mt-10 [&_figcaption]:mt-4 [&_figcaption]:flex [&_figcaption]:flex-col [&_figcaption]:gap-1.5 [&_figcaption>span:first-child]:text-xs [&_figcaption>span:first-child]:font-bold [&_figcaption>span:first-child]:tracking-[.05em] [&_figcaption>span:first-child]:uppercase [&_figcaption>span:last-child]:text-[11px] [&_figcaption>span:last-child]:text-olive max-[480px]:[&_figcaption>span]:text-[10px] max-[480px]:[&_figcaption>span:last-child]:leading-[1.5]',
  videoFrame: 'aspect-[3/4] overflow-hidden bg-[#30372a] [&_video]:block [&_video]:h-full [&_video]:w-full [&_video]:object-cover max-[480px]:aspect-[9/16]',
  footer: 'mt-12 flex flex-wrap items-center justify-center gap-[26px] max-[480px]:gap-4 [&_a]:inline-flex [&_a]:min-h-[54px] [&_a]:items-center [&_a]:justify-between [&_a]:gap-[38px] [&_a]:bg-ink [&_a]:px-6 [&_a]:py-[18px] [&_a]:text-[11px] [&_a]:font-semibold [&_a]:tracking-[.04em] [&_a]:text-white [&_a]:uppercase [&_a_span]:text-[22px] [&_a_span]:leading-none [&_button]:inline-flex [&_button]:min-h-11 [&_button]:cursor-pointer [&_button]:items-center [&_button]:gap-3 [&_button]:border-b [&_button]:border-ink/35 [&_button]:text-[11px]',
};

const clips = [
  { file: 'aesthetics-client-consultation', title: 'The conversation', description: 'Aesthetics consultation' },
  { file: 'facial-device-treatment', title: 'The experience', description: 'Treatment in progress' },
  { file: 'facial-injection-close-up', title: 'The details', description: 'A closer look' },
  { file: 'jawline-injection-treatment', title: 'The process', description: 'Behind the treatment' },
];

function PortfolioVideo({ clip }) {

  return (
    <figure data-motion="clip" className={styles.clip}>
      <div className={styles.videoFrame}>
        <BackgroundVideo src={`/videos/portfolio/${clip.file}.mp4`} decorative={false} poster={`/images/portfolio/${clip.file}.jpg`} aria-label={clip.description} />
      </div>
      <figcaption><span>{clip.title}</span><span>{clip.description}</span></figcaption>
    </figure>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div data-motion="intro" className={styles.inner}>
        <p data-text="eyebrow" className={styles.eyebrow}>03 / In the frame</p>
        <h2 data-text="heading" id="work-title"><RevealLine>Your business,</RevealLine><RevealLine index={1}><em>seen up close.</em></RevealLine></h2>
        <p className={styles.description}>From the first conversation to the details of a treatment, here’s how I bring a business’s everyday work into the frame.</p>
        <div className={styles.grid}>{clips.map(clip => <PortfolioVideo key={clip.file} clip={clip} />)}</div>
        <div className={styles.footer}>
          <a href="#inquiry">Plan your content with me <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
