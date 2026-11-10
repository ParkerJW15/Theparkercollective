'use client';

import { useEffect } from 'react';

export default function SectionMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const revealSelector = '[data-motion]:not([data-entered]), [data-text]:not([data-entered]), [data-typewriter="viewport"]:not([data-entered])';
    const observeTree = root => {
      if (!observer || preference.matches || root.nodeType !== 1) return;
      if (root.matches(revealSelector)) observer.observe(root);
      root.querySelectorAll(revealSelector).forEach(element => observer.observe(element));
    };
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
          if (!entry.isIntersecting || entry.intersectionRatio < 0.12 || entry.target.closest('[inert]')) continue;
          entry.target.setAttribute('data-entered', 'true');
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.12 });
      observeTree(document.body);
    };

    // Keep continuous ticker animations asleep while offscreen or in a hidden tab.
    const visibleTickers = new Set();
    const updateTickers = () => {
      document.querySelectorAll('[data-marquee]').forEach(element => {
        element.setAttribute('data-active', String(visibleTickers.has(element) && !document.hidden));
      });
    };
    const tickerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleTickers.add(entry.target);
        else visibleTickers.delete(entry.target);
      });
      updateTickers();
    }, { rootMargin: '160px 0px' });
    document.querySelectorAll('[data-marquee]').forEach(element => tickerObserver.observe(element));
    document.addEventListener('visibilitychange', updateTickers);
    // Register new testimonials/status content and answers revealed by the FAQ.
    const contentObserver = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'attributes') observeTree(record.target);
        else record.addedNodes.forEach(observeTree);
      }
    });
    contentObserver.observe(document.getElementById('smooth-content') || document.body, {
      childList: true, subtree: true, attributes: true, attributeFilter: ['inert'],
    });
    observe();
    preference.addEventListener('change', observe);
    return () => {
      observer?.disconnect();
      tickerObserver.disconnect();
      contentObserver.disconnect();
      document.removeEventListener('visibilitychange', updateTickers);
      preference.removeEventListener('change', observe);
    };
  }, []);

  return null;
}
