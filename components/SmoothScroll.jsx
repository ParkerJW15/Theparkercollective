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

      return () => smoother.kill();
    });

    return () => media.revert();
  }, { scope: wrapper });

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div ref={content} id="smooth-content">{children}</div>
    </div>
  );
}
