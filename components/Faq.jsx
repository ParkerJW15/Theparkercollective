import styles from './Faq.module.css';

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
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}><span aria-hidden="true">02 /</span> The details</p>
          <h2 id="faq-title" className={styles.title}>You ask.<br /><span>I answer.</span></h2>
          <p className={styles.description}>A few things you might be wondering<br className={styles.desktopBreak} /> about working together.</p>
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

        <div className={styles.questions}>
          {faqs.map(({ question, answer }, index) => (
            <details key={question} name="parker-faq" className={styles.item} open={index === 0}>
              <summary className={styles.question}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{question}</span>
                <span className={styles.symbol} aria-hidden="true" />
              </summary>
              <div className={styles.answer}><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
