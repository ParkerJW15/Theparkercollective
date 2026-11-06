'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function SmoothScroll({ children }) {
  const wrapper = useRef(null);
  const content = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', () => {
      const smoother = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1.1,
        smoothTouch: false,
        effects: false,
        normalizeScroll: false,
      });

      const handleAnchor = event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const hash = link.getAttribute('href');
        const target = document.getElementById(hash.slice(1));
        if (!target) return;
        event.preventDefault();
        if (window.location.hash !== hash) window.history.pushState(null, '', hash);
        smoother.scrollTo(target, true, 'top top');
      };
      const alignHash = () => {
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) smoother.scrollTo(target, false, 'top top');
      };
      content.current.addEventListener('click', handleAnchor);
      window.addEventListener('hashchange', alignHash);
      const container = content.current;
      return () => {
        container.removeEventListener('click', handleAnchor);
        window.removeEventListener('hashchange', alignHash);
        smoother.kill();
      };
    });

    // ScrollSmoother transforms the page, so use a matching transform pin
    // instead of native sticky positioning while smoothing is active.
    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', () => {
      const layout = content.current.querySelector('[data-package-layout]');
      const visual = content.current.querySelector('[data-package-visual]');
      if (!layout || !visual) return;
      gsap.set(visual, { position: 'relative', top: 0 });
      ScrollTrigger.create({
        trigger: layout,
        start: 'top top+=24',
        end: () => `+=${Math.max(0, layout.offsetHeight - visual.offsetHeight)}`,
        pin: visual,
        pinType: 'transform',
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    const initialHashFrame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) ScrollSmoother.get()?.scrollTo(target, false, 'top top');
    });
    return () => { cancelAnimationFrame(initialHashFrame); media.revert(); };
  }, { scope: wrapper });

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div ref={content} id="smooth-content">{children}</div>
    </div>
  );
}
