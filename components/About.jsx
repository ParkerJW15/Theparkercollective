import RevealLine from './RevealLine';
import TypewriterText from './TypewriterText';
import Image from 'next/image';
const styles = {
  about: 'section-space overflow-hidden bg-white text-ink',
  inner: 'mx-auto grid max-w-[1180px] grid-cols-[minmax(0,.95fr)_minmax(0,1fr)] items-center gap-[clamp(60px,8vw,120px)] max-[1000px]:gap-12 max-[760px]:max-w-[520px] max-[760px]:grid-cols-1 max-[760px]:gap-16',
  photography: 'group/photo relative m-0 pl-[35px] max-[1000px]:pl-[22px] max-[760px]:mx-auto max-[760px]:w-full max-[760px]:max-w-[380px] max-[760px]:pr-4 max-[760px]:pl-9',
  film: 'mx-auto max-w-[410px] -rotate-4 border border-[#383a32] bg-[#080908] px-[15px] shadow-[10px_20px_35px_#0002] transition-transform duration-[650ms] ease-[cubic-bezier(.2,.65,.2,1)] motion-safe:group-hover/photo:-rotate-[1.5deg] motion-reduce:transition-none max-[760px]:px-3',
  filmHeader: 'flex min-h-[31px] items-center justify-between gap-3 font-mono text-[7px] tracking-[.13em] text-[#c0c3a9] max-[760px]:text-[6px]',
  frameDivider: 'flex min-h-7 items-center justify-between gap-3 font-mono text-[7px] tracking-[.13em] text-[#c0c3a9] max-[760px]:text-[6px]',
  filmFooter: 'flex min-h-[34px] items-center justify-between gap-3 font-mono text-[6px] tracking-[.13em] text-[#c0c3a9] max-[760px]:gap-1.5 max-[760px]:text-[5px]',
  detailFrame: 'relative aspect-[2.7] overflow-hidden',
  portraitFrame: 'relative aspect-[.78] overflow-hidden',
  detailPhoto: 'object-cover object-[center_37%]',
  portraitPhoto: 'object-cover object-center',
  photoCaption: 'absolute top-[52%] -left-[7px] rotate-180 font-editorial text-[23px] whitespace-nowrap text-olive italic [writing-mode:vertical-rl] max-[1000px]:-left-3 max-[1000px]:text-xl max-[760px]:left-0',
  eyebrow: 'mb-6 flex items-center gap-[18px] text-[10px] font-semibold tracking-[.18em] text-olive uppercase [&>span]:text-[#686c5f] max-[760px]:mb-6 max-[760px]:gap-3.5 max-[760px]:text-[9px]',
  headingRow: 'mb-8 flex items-center justify-between gap-[clamp(12px,2vw,24px)]',
  logo: 'w-[clamp(64px,8vw,104px)] shrink-0 rotate-12',
  title: 'min-w-0 text-[clamp(54px,5.4vw,78px)] leading-[.95] font-bold tracking-[-.065em] uppercase [&_[data-emphasis]]:text-ink [&_[data-emphasis]]:shadow-[inset_0_-.16em_0_#e8ff8c] max-[1000px]:text-[56px] max-[760px]:text-[clamp(54px,14vw,72px)]',
  intro: 'font-editorial mb-6 text-xl leading-[1.45] max-[1000px]:text-lg',
  body: 'font-editorial text-[15px] leading-[1.8] text-muted [&_p+p]:mt-5 max-[1000px]:text-sm max-[760px]:text-[15px]',
  contact: 'mt-8 inline-flex min-h-[54px] items-center justify-between gap-9 bg-brand-accent px-6 py-[15px] text-[11px] font-bold tracking-[.035em] text-black uppercase transition-colors hover:bg-ink hover:text-brand-accent focus-visible:outline-ink motion-reduce:transition-none [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px] motion-reduce:[&_svg]:transition-none max-[760px]:mx-auto max-[760px]:flex max-[760px]:w-3/5 max-[760px]:max-w-[280px] max-[760px]:justify-center max-[760px]:gap-2 max-[760px]:px-3 max-[760px]:text-center max-[760px]:[&_svg]:hidden',
};

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <figure data-motion="portrait" className={styles.photography}>
          <div className={styles.film}>
            <div className={styles.filmHeader} aria-hidden="true">
              <span>THE PARKER COLLECTIVE</span><span>01 — 02</span>
            </div>
            <div className={styles.detailFrame}>
              <Image
                src="/images/portraits/shot6-web.webp"
                alt="A behind-the-scenes detail of Parker working with his laptop"
                fill
                sizes="(max-width: 760px) 80vw, 380px"
                className={styles.detailPhoto}
              />
            </div>
            <div className={styles.frameDivider} aria-hidden="true">
              <span>CREATIVE BY NATURE</span><span>02 ▸</span>
            </div>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/portraits/shot3-web.webp"
                alt="Parker Wheatley wearing sunglasses, a black polo and cream trousers against a dark brick wall"
                fill
                sizes="(max-width: 760px) 80vw, 380px"
                className={styles.portraitPhoto}
              />
            </div>
            <div className={styles.filmFooter} aria-hidden="true">
              <span>LOUISVILLE, KY</span><span>THE PERSON BEHIND THE POSTS</span>
            </div>
          </div>
          {/* <figcaption className={styles.photoCaption}>A little more personal.</figcaption> */}
        </figure>

        <div data-motion="about-copy">
          <p data-text="eyebrow" className={styles.eyebrow}><span aria-hidden="true">05 /</span> Behind the collective</p>
          <div className={styles.headingRow}>
            <h2 data-text="heading" id="about-title" className={styles.title}><RevealLine>Hey, I’m</RevealLine><RevealLine index={1}><span data-emphasis>Parker.</span></RevealLine></h2>
            <div className={styles.logo} aria-hidden="true">
              <Image src="/images/brand/parker-collective-monogram-dark.webp" alt="" width={514} height={452} sizes="(max-width: 800px) 64px, 104px" className="block h-auto w-full" />
            </div>
          </div>
          <p className={styles.intro}><TypewriterText>Your social media partner,<br />from the first idea to the final post.</TypewriterText></p>
          <div className={styles.body}>
            <p>
              I started The Parker Collective to give businesses the creative
              support and clear direction their social media deserves.
            </p>
            <p>
              Based in Louisville, I’ve spent nearly two years working with
              businesses across different industries. I love finding the details
              that make a brand its own, then turning them into content people
              can connect with.
            </p>
            <p>
              We’ll start with your business, your audience, and what you want
              to achieve. From there, I’ll shape a strategy and content that
              sound, look, and feel like you.
            </p>
          </div>
          <a href="#inquiry" className={styles.contact}>
            Let’s talk about your business
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
