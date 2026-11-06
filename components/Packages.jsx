import Image from 'next/image';
const styles = {
  section: 'bg-paper px-6 pb-[100px] text-ink max-[900px]:pb-[72px]',
  layout: 'mx-auto grid max-w-[1440px] grid-cols-2 items-start gap-6 max-[900px]:max-w-[600px] max-[900px]:grid-cols-1',
  visual: 'sticky top-6 h-[calc(100svh-48px)] min-h-[540px] max-h-[900px] overflow-hidden max-[900px]:relative max-[900px]:top-auto max-[900px]:h-[640px] max-[900px]:min-h-0 max-[900px]:max-h-[85svh]',
  photo: 'object-cover object-[center_42%]',
  shade: 'absolute inset-0 bg-[linear-gradient(180deg,#0007,#0002_35%,#000b_100%)]',
  photoCopy: 'relative z-1 flex h-full flex-col p-[clamp(28px,3.6vw,60px)] text-white max-[900px]:p-8 max-[400px]:p-[26px] [&_h2]:mt-auto [&_h2]:pt-[70px] [&_h2]:text-[clamp(40px,4.2vw,70px)] [&_h2]:leading-[.99] [&_h2]:font-bold [&_h2]:tracking-[-.065em] [&_h2]:uppercase [&_h2_span]:text-brand-accent max-[900px]:[&_h2]:text-[clamp(40px,9vw,66px)]',
  eyebrow: 'text-[10px] font-semibold tracking-[.15em] uppercase',
  intro: 'mt-6 max-w-[340px] text-[15px] leading-[1.7]',
  photoFooter: 'mt-11 flex items-center justify-between border-t border-white/40 pt-5 text-[9px] tracking-[.13em] uppercase [&>span]:text-[26px] max-[400px]:mt-7',
  cards: 'grid gap-6',
  card: 'border border-ink/15 p-[clamp(28px,3.7vw,60px)] max-[900px]:p-8 max-[400px]:p-[26px] [&_h3]:mt-[38px] [&_h3]:text-[clamp(44px,5vw,76px)] [&_h3]:leading-none [&_h3]:font-bold [&_h3]:tracking-[-.065em] [&_h3]:uppercase max-[900px]:[&_h3]:text-[clamp(42px,10vw,64px)] [&_ul]:mt-4 [&_ul]:list-none [&_ul]:p-0 [&_li]:grid [&_li]:grid-cols-[16px_1fr] [&_li]:gap-3 [&_li]:py-2 [&_li]:text-sm [&_li]:leading-[1.5] [&_li>span]:text-olive',
  essential: 'bg-brand-accent', elevated: 'bg-[#e3e6d9]', elite: 'bg-[#d0d7ba]',
  cardTop: 'flex justify-between gap-5 text-[9px] font-semibold tracking-[.12em] uppercase max-[400px]:gap-2.5 max-[400px]:text-[8px]',
  description: 'mt-[18px] max-w-[300px] text-base leading-[1.6]',
  includes: 'mt-[35px] border-t border-ink/20 pt-[25px] text-[10px] font-semibold tracking-[.13em] uppercase',
  cta: 'mt-[30px] flex items-center justify-between gap-5 bg-ink px-[22px] py-[18px] text-[11px] font-semibold tracking-[.04em] text-white uppercase transition-colors hover:bg-[#3e4b2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:transition-none [&>span]:text-[22px] [&>span]:leading-none',
};

// Package inclusions transcribed from Parker's supplied Instagram carousel.
const packages = [
  { name: 'Essential', description: 'The essentials for showing up with intention.', features: ['6 feed posts + story posts', 'Captions and hashtags', 'Growth strategy', 'Monthly analytics'] },
  { name: 'Elevated', description: 'More content. More support. More room to create.', features: ['10 feed posts + story posts', 'Comprehensive social media audit + growth strategy', 'Captions and hashtags', 'Bio optimization, highlight covers + pinned post', 'Video and photo editing', '1 content shoot', 'Full account management + trend research', 'Monthly analytics'] },
  { name: 'Elite', description: 'A fuller creative partnership for your social presence.', features: ['15 feed posts + story posts', 'Comprehensive social media audit + growth strategy', 'Captions and hashtags', 'Bio optimization, highlight covers + pinned post', 'Video and photo editing', '2 content shoots', 'Full account management + trend research', 'Monthly analytics'] },
];

export default function Packages() {
  return (
    <section id="packages" className={styles.section} aria-labelledby="packages-title">
      <div className={styles.layout} data-package-layout>
        <div className={styles.visual} data-package-visual>
          <Image src="/images/portraits/headshot1.jpeg" alt="Parker working on a tablet" fill sizes="(max-width: 900px) 100vw, 45vw" className={styles.photo} />
          <div className={styles.shade} />
          <div className={styles.photoCopy}>
            <p className={styles.eyebrow}>02 / Ways to work together</p>
            <h2 id="packages-title">Your brand.<br />Your goals.<br /><span>Your package.</span></h2>
            <p className={styles.intro}>A little support or the whole social picture. Find the fit for where your business is right now.</p>
            <span className={styles.photoFooter}>The Parker Collective <span aria-hidden="true">↘</span></span>
          </div>
        </div>
        <div className={styles.cards}>
          {packages.map((item, index) => (
            <article className={`${styles.card} ${styles[item.name.toLowerCase()]}`} key={item.name}>
              <div className={styles.cardTop}><span>Social media management</span><span>0{index + 1} / 03</span></div>
              <h3>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.includes}>What’s included</p>
              <ul>{item.features.map(feature => <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>)}</ul>
              <a className={styles.cta} href="#inquiry">Let’s talk {item.name}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
