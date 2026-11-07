import Image from 'next/image';
const styles = {
  about: 'paper-grain overflow-hidden bg-paper px-[6vw] pt-[116px] pb-[124px] text-ink max-[1000px]:px-[5vw] max-[1000px]:py-[90px] max-[760px]:px-6 max-[760px]:pt-[72px] max-[760px]:pb-20',
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
  eyebrow: 'mb-[30px] flex items-center gap-[18px] text-[10px] font-semibold tracking-[.18em] text-olive uppercase [&>span]:text-[#686c5f] max-[760px]:mb-6 max-[760px]:gap-3.5 max-[760px]:text-[9px]',
  title: 'mb-[27px] text-[clamp(54px,5.4vw,78px)] leading-[.95] font-bold tracking-[-.065em] uppercase [&>span]:text-ink [&>span]:shadow-[inset_0_-.16em_0_#e8ff8c] max-[1000px]:text-[56px] max-[760px]:text-[clamp(54px,14vw,72px)]',
  intro: 'mb-6 text-xl leading-[1.45] tracking-[-.025em] max-[1000px]:text-lg',
  body: 'text-[15px] leading-[1.8] text-muted [&_p+p]:mt-[18px] max-[1000px]:text-sm max-[760px]:text-[15px]',
  contact: 'mt-[30px] inline-flex min-h-[54px] items-center justify-between gap-9 bg-brand-accent px-6 py-[15px] text-[11px] font-bold tracking-[.035em] text-black uppercase transition-colors hover:bg-ink hover:text-brand-accent focus-visible:outline-ink motion-reduce:transition-none [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px] motion-reduce:[&_svg]:transition-none max-[760px]:w-full',
};

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <figure className={styles.photography}>
          <div className={styles.film}>
            <div className={styles.filmHeader} aria-hidden="true">
              <span>THE PARKER COLLECTIVE</span><span>01 — 02</span>
            </div>
            <div className={styles.detailFrame}>
              <Image
                src="/images/portraits/shot6.jpeg"
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
                src="/images/portraits/shot3.jpeg"
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
          <figcaption className={styles.photoCaption}>A little more personal.</figcaption>
        </figure>

        <div>
          <p className={styles.eyebrow}><span aria-hidden="true">05 /</span> Behind the collective</p>
          <h2 id="about-title" className={styles.title}>Hey, I’m<br /><span>Parker.</span></h2>
          <p className={styles.intro}>A creative mind.<br />A strategic side. Your brand’s next chapter.</p>
          <div className={styles.body}>
            <p>
              I’m a Louisville-based social media manager with a love for
              content, connection, and the strategy behind what makes a brand
              stand out.
            </p>
            <p>
              After nearly two years of working with businesses across different
              industries, I’m growing The Parker Collective around what I love
              most: helping business owners bring their vision to life and show
              up confidently online.
            </p>
            <p>
              From the first content idea to understanding what’s working,
              I bring creativity and intention to the process—so your social
              presence feels like you and speaks to your people.
            </p>
          </div>
          <a href="#inquiry" className={styles.contact}>
            Let’s create something
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
