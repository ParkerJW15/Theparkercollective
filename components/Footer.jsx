import TypewriterText from './TypewriterText';
import Image from 'next/image';

const links = [
  ['Home', '#main'], ['Packages', '#packages'], ['Work', '#work'],
  ['About', '#about'], ['FAQs', '#faq'], ['Inquire', '#inquiry'],
];

export default function Footer() {
  return (
    <footer data-motion="footer" data-footer-reveal className="relative z-0 -mt-12 footer-lines overflow-hidden bg-white text-ink" aria-label="Site footer">
      <div data-footer-content className="section-inset pt-24 pb-8 max-[760px]:pt-20">
        <div className="mx-auto max-w-[1180px]">
          <nav aria-label="Footer navigation" className="grid grid-cols-6 gap-x-7 gap-y-5 border-b border-ink/20 pb-8 max-[760px]:grid-cols-3 max-[400px]:grid-cols-2">
            {links.map(([label, href], index) => <a key={href} href={href} className="flex min-h-11 items-center gap-2.5 text-[18px] font-medium tracking-[-.03em] transition-colors hover:text-olive focus-visible:outline-ink"><span className="font-mono text-[10px] tracking-normal">0{index + 1}</span>{label}</a>)}
          </nav>
          <div className="grid grid-cols-[1fr_280px_1fr] items-center gap-10 py-9 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:text-center">
            <p data-text="heading-copy" className="max-w-[230px] text-[clamp(22px,2.6vw,36px)] leading-[1.12] font-bold tracking-[-.045em] max-[760px]:mx-auto max-[760px]:max-w-none">Good work.<br className="max-[760px]:hidden" /> Worth sharing.</p>
            <a href="#main" aria-label="The Parker Collective — back to top" className="mx-auto block focus-visible:outline-ink"><Image src="/images/brand/parker-collective-logo-transparent.png" alt="The Parker Collective" width={280} height={280} sizes="(max-width: 760px) 210px, 280px" className="size-[280px] object-contain max-[760px]:size-[210px]" /></a>
            <div className="justify-self-end text-right max-[760px]:justify-self-center max-[760px]:text-center">
              <p className="text-[10px] tracking-[.15em] uppercase">Louisville, Kentucky</p>
              <p className="font-editorial mt-3 text-sm leading-[1.7]"><TypewriterText>Social media management.<br />Content creation. Strategy.</TypewriterText></p>
              <div className="mt-5 flex justify-end gap-5 text-xs max-[760px]:justify-center">
                <a href="https://www.instagram.com/theparkercollectiveco/" target="_blank" rel="noopener noreferrer" className="py-3 underline-offset-4 hover:underline focus-visible:outline-ink">Instagram ↗</a>
                <a href="mailto:theparkercollective.co@gmail.com" className="py-3 underline-offset-4 hover:underline focus-visible:outline-ink">Email ↗</a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-ink/25 pt-6 text-[10px] leading-[1.7] font-semibold tracking-[.025em] uppercase max-[760px]:justify-center max-[760px]:text-center">
            <p>© {new Date().getFullYear()} The Parker Collective <span aria-hidden="true" className="mx-2">—</span> Website by <a href="https://hasnainwebstudio.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline-ink">Hasnain Webstudio</a></p>
            <a href="#main" className="inline-flex min-h-11 items-center gap-4 focus-visible:outline-ink">Back to the beginning <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
