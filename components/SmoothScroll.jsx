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
        // Native fragment navigation can scroll the fixed wrapper itself.
        // Keep document scrolling as the single source of scroll position.
        wrapper.current.scrollTop = 0;
        if (target) smoother.scrollTo(target, false, 'top top');
        else if (!window.location.hash) smoother.scrollTo(0, false);
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

    // Hold the section above About in place while About and its ticker
    // travel over it, then release into ordinary page scrolling.
    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const stack = content.current.querySelector('[data-section-stack]');
      const underlay = stack?.querySelector('[data-section-underlay]');
      const cover = stack?.querySelector('[data-section-cover]');
      if (!stack || !underlay || !cover) return;
      ScrollTrigger.create({
        trigger: underlay,
        start: 'bottom bottom',
        end: () => `+=${Math.max(window.innerHeight, cover.offsetHeight)}`,
        pin: underlay,
        pinType: 'transform',
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      // Toggle playback only at coverage boundaries, without layout reads on every frame.
      const coverage = ScrollTrigger.create({
        trigger: cover,
        start: 'top top',
        end: 'bottom top',
        onToggle: self => underlay.toggleAttribute('data-media-covered', self.isActive),
        onRefresh: self => underlay.toggleAttribute('data-media-covered', self.isActive),
      });
      underlay.toggleAttribute('data-media-covered', coverage.isActive);
      return () => underlay.removeAttribute('data-media-covered');
    });

    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const footer = content.current.querySelector('[data-footer-reveal]');
      const footerContent = content.current.querySelector('[data-footer-content]');
      if (!footer || !footerContent) return;
      // Keep mobile footers in normal flow; reveal only on larger screens.
      gsap.fromTo(footerContent, { yPercent: -100 }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: footer, start: 'top bottom', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true },
      });
    });

    const initialHashFrame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (ScrollSmoother.get()) wrapper.current.scrollTop = 0;
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
