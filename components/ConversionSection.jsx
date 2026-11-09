import RevealLine from './RevealLine';
import bg2 from '../assets/originals/images/portraits/bg2.png';

const concerns = [
  { number: '01', lead: 'Another task on your list.', text: 'You finish the day knowing you still haven’t posted.', color: 'text-brand-accent', tilt: '-rotate-3', image: bg2.src },
  { number: '02', lead: 'Great work. Quiet feed.', text: 'Your content hasn’t caught up with the quality of your business.', color: 'text-[#d0d7ba]', tilt: 'rotate-2 min-[761px]:translate-y-9', image: bg2.src },
  { number: '03', lead: 'Plenty of ideas. No plan.', text: 'You need a clear direction for what to share and why.', color: 'text-[#e3e6d9]', tilt: '-rotate-2', image: bg2.src },
];

function ScallopedCard({ id, image }) {
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full drop-shadow-[2px_3px_0_#191b1710]" aria-hidden="true">
      <defs>
        <pattern id={`card-bg-${id}`} patternUnits="userSpaceOnUse" width="360" height="360">
          <image href={image} x="0" y="0" width="360" height="360" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      <rect x="3" y="3" width="354" height="354" fill={`url(#card-bg-${id})`} stroke="#191b17" strokeWidth="2" />
      <rect x="3" y="3" width="354" height="354" fill="currentColor" opacity="0.6" />
      <rect x="13" y="13" width="334" height="334" fill="none" stroke="#191b17" strokeWidth="2" />
    </svg>
  );
}

export default function ConversionSection() {
  return (
    <section id="why-parker" aria-labelledby="why-parker-title" className="section-space paper-grain bg-white text-ink">
      <div className="mx-auto max-w-[1180px]">
        <div data-motion="intro" className="mx-auto max-w-[1000px] text-center">
          <p className="mb-6 text-[10px] font-semibold tracking-[.18em] text-olive uppercase">01 / Sound familiar?</p>
          <h2 data-text="heading" id="why-parker-title" className="text-[clamp(36px,4.2vw,60px)] leading-[1.02] font-bold tracking-[-.06em] uppercase"><RevealLine>Too much to do.</RevealLine><RevealLine index={1}>Too little time <span className="inline-block shadow-[inset_0_-.17em_0_#e8ff8c]">to post.</span></RevealLine></h2>
          <p className="mx-auto mt-7 max-w-[460px] text-base leading-[1.75] text-muted">Between looking after clients and running the business, finding time to plan, film, and post can feel like a job of its own.</p>
        </div>
        <div data-motion="notes" className="mt-16 grid grid-cols-3 gap-6 max-[760px]:mx-auto max-[760px]:max-w-[380px] max-[760px]:grid-cols-1 max-[760px]:gap-8">
          {concerns.map(item => (
            <article key={item.number} className={`relative flex aspect-square items-center justify-center ${item.color} ${item.tilt}`}>
              <ScallopedCard id={item.number} image={item.image} />
              <div className="relative z-1 px-[14%] py-10 text-center text-ink">
                <p className="mb-5 font-mono text-[10px] tracking-[.15em] text-olive">{item.number}</p>
                <h3 className="text-[clamp(18px,1.7vw,24px)] leading-[1.45] font-bold tracking-[-.025em] max-[760px]:text-[23px]">{item.lead}</h3>
                <p className="mt-2 text-[clamp(16px,1.5vw,21px)] leading-[1.5] tracking-[-.02em] max-[760px]:text-xl">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div data-motion="bridge" className="mx-auto mt-24 max-w-[620px] text-center max-[760px]:mt-12">
          <p className="text-[clamp(28px,3vw,40px)] leading-[1.15] font-bold tracking-[-.045em]">Hand over the content.<br />Keep your time for your business.</p>
          <p className="mx-auto mt-5 max-w-[510px] text-[15px] leading-[1.8] text-muted">I bring strategy, content creation, and ongoing support together around your goals. You get a more consistent presence and a clearer picture of what’s working.</p>
          <a href="#packages" className="mt-8 inline-flex min-h-14 items-center justify-between gap-10 bg-ink px-7 py-4 text-xs font-semibold tracking-[.04em] text-brand-accent uppercase transition-colors hover:bg-olive focus-visible:outline-ink motion-reduce:transition-none">Explore the packages <span aria-hidden="true" className="text-xl">↘</span></a>
          <p className="mt-4 text-xs text-muted">Not sure where to start? <a href="#inquiry" className="underline underline-offset-4 hover:text-ink focus-visible:outline-ink">Tell me what you need.</a></p>
        </div>
      </div>
    </section>
  );
}