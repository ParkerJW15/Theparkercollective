const concerns = [
  { number: '01', lead: 'Your to-do list is full.', text: 'Posting consistently keeps slipping to the bottom.', color: 'text-brand-accent', tilt: '-rotate-3' },
  { number: '02', lead: 'You have plenty to say.', text: 'Turning it into content takes time you don’t have.', color: 'text-[#d0d7ba]', tilt: 'rotate-2 min-[761px]:translate-y-9' },
  { number: '03', lead: 'You’re showing up online.', text: 'But you want a clearer plan behind every post.', color: 'text-[#e3e6d9]', tilt: '-rotate-2' },
];

function ScallopedCard() {
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full drop-shadow-[2px_3px_0_#191b1710]" aria-hidden="true">
      <rect x="3" y="3" width="354" height="354" fill="currentColor" stroke="#191b17" strokeWidth="2" />
      <rect x="13" y="13" width="334" height="334" fill="none" stroke="#191b17" strokeWidth="2" />
    </svg>
  );
}

export default function ConversionSection() {
  return (
    <section id="why-parker" aria-labelledby="why-parker-title" className="paper-grain bg-paper px-6 pt-24 pb-[110px] text-ink sm:px-[6vw] max-[760px]:py-[72px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="mb-6 text-[10px] font-semibold tracking-[.18em] text-olive uppercase">01 / Sound familiar?</p>
          <h2 id="why-parker-title" className="text-[clamp(36px,4.2vw,60px)] leading-[1.02] font-bold tracking-[-.06em] uppercase">Your business comes first.<br />Your socials get <span className="inline-block shadow-[inset_0_-.17em_0_#e8ff8c]">what’s left.</span></h2>
          <p className="mx-auto mt-7 max-w-[460px] text-base leading-[1.75] text-muted">You’ve got clients to look after, ideas to bring to life, and a business to run. Social media can feel like another full-time job.</p>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-1 max-[760px]:mx-auto max-[760px]:max-w-[380px] max-[760px]:grid-cols-1 max-[760px]:gap-6">
          {concerns.map(item => (
            <article key={item.number} className={`relative flex aspect-square items-center justify-center ${item.color} ${item.tilt}`}>
              <ScallopedCard />
              <div className="relative z-1 px-[14%] py-10 text-center text-ink">
                <p className="mb-5 font-mono text-[10px] tracking-[.15em] text-olive">{item.number}</p>
                <h3 className="text-[clamp(18px,1.7vw,24px)] leading-[1.45] font-bold tracking-[-.025em] max-[760px]:text-[23px]">{item.lead}</h3>
                <p className="mt-2 text-[clamp(16px,1.5vw,21px)] leading-[1.5] tracking-[-.02em] max-[760px]:text-xl">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-24 max-w-[620px] text-center max-[760px]:mt-12">
          <p className="text-[clamp(28px,3vw,40px)] leading-[1.15] font-bold tracking-[-.045em]">Keep your focus on the business.<br />I’ll bring the plan for your socials.</p>
          <p className="mx-auto mt-5 max-w-[510px] text-[15px] leading-[1.8] text-muted">From strategy and content shoots to captions, posting, and monthly analytics, we’ll choose the support that fits your business—so every post has a purpose.</p>
          <a href="#packages" className="mt-7 inline-flex min-h-14 items-center justify-between gap-10 bg-ink px-7 py-4 text-xs font-semibold tracking-[.04em] text-brand-accent uppercase transition-colors hover:bg-olive focus-visible:outline-ink motion-reduce:transition-none">Find your kind of support <span aria-hidden="true" className="text-xl">↘</span></a>
          <p className="mt-4 text-xs text-muted">Not sure where to start? <a href="#inquiry" className="underline underline-offset-4 hover:text-ink focus-visible:outline-ink">Let’s talk about your goals.</a></p>
        </div>
      </div>
    </section>
  );
}
