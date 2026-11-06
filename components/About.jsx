import Image from 'next/image';
import styles from './About.module.css';

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

        <div className={styles.copy}>
          <p className={styles.eyebrow}><span aria-hidden="true">01 /</span> Behind the collective</p>
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
          <a href="mailto:theparkercollective.co@gmail.com" className={styles.contact}>
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
