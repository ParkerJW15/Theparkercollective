'use client';

import { useEffect } from 'react';

export default function SectionMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    // Animate text blocks themselves, so long sections do not reveal copy too early.
    const textSelectors = [
      '[data-motion="intro"] > p', '[data-motion="bridge"] > p',
      '[data-motion="package-photo"] > p', '[data-motion="package"] > p:not([data-package-rule])',
      '[data-motion="package"] li', '[data-motion="about-copy"] > p',
      '[data-motion="about-copy"] > div p', '[data-motion="inquiry"] > p',
      '[data-motion="form"] > p', '[data-motion="footer"] p',
    ];
    document.querySelectorAll(textSelectors.join(',')).forEach(element => {
      if (!element.hasAttribute('data-text')) element.setAttribute('data-text', 'body');
      const siblings = [...element.parentElement.children].filter(child => child.hasAttribute('data-text'));
      element.style.setProperty('--text-delay', `${Math.min(siblings.indexOf(element), 3) * 70 + 120}ms`);
    });

    const observe = () => {
      observer?.disconnect();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-entered', 'true');
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.12 });
      document.querySelectorAll('[data-motion]:not([data-entered]), [data-text]:not([data-entered])').forEach(element => observer.observe(element));
    };

    observe();
    preference.addEventListener('change', observe);
    return () => { observer?.disconnect(); preference.removeEventListener('change', observe); };
  }, []);

  return null;
}
