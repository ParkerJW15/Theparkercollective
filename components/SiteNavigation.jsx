'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import useOutsideClick from '@/hooks/useOutsideClick';
import styles from './SiteNavigation.module.css';

const subscribeToMount = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

const links = [
  { label: 'Services', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#inquiry' },
];

export default function SiteNavigation() {
  const mounted = useSyncExternalStore(subscribeToMount, clientSnapshot, serverSnapshot);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const panel = useRef(null);
  const closeButton = useRef(null);
  const releaseScroll = useRef(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const closeTimer = useRef(null);
  const pendingNavigation = useRef(null);

  const unlockScroll = useCallback(() => {
    releaseScroll.current?.();
    releaseScroll.current = null;
  }, []);

  const finishClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    dialog.current?.close();
    unlockScroll();
    setOpen(false);
    setClosing(false);
    closingRef.current = false;
    const navigate = pendingNavigation.current;
    pendingNavigation.current = null;
    if (navigate) navigate();
    else trigger.current?.focus({ preventScroll: true });
  }, [unlockScroll]);

  const closeMenu = useCallback(() => {
    if (!dialog.current?.open || closingRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishClose();
      return;
    }
    closingRef.current = true;
    setClosing(true);
    // Also finish if motion preferences change during the exit animation.
    closeTimer.current = setTimeout(finishClose, 280);
  }, [finishClose]);

  const handleOutside = useCallback(event => {
    event.preventDefault();
    closeMenu();
  }, [closeMenu]);

  useOutsideClick(panel, handleOutside, open);
  useEffect(() => () => { clearTimeout(closeTimer.current); unlockScroll(); }, [unlockScroll]);

  function openMenu() {
    if (dialog.current.open) return;
    const smoother = ScrollSmoother.get();
    const wasPaused = smoother?.paused();
    const rootOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;

    smoother?.paused(true);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    releaseScroll.current = () => {
      document.documentElement.style.overflow = rootOverflow;
      document.body.style.overflow = bodyOverflow;
      if (smoother && ScrollSmoother.get() === smoother) smoother.paused(wasPaused);
    };

    // Native top-layer placement avoids ScrollSmoother's transformed wrapper.
    // The browser also traps focus and makes the underlying page inert.
    dialog.current.showModal();
    setOpen(true);
    closeButton.current.focus({ preventScroll: true });
  }

  function handleKeyDown(event) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(dialog.current.querySelectorAll('a[href], button:not([disabled])'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleNavigate(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const hash = event.currentTarget.getAttribute('href');
    const target = document.querySelector(hash);
    if (!target) return;
    pendingNavigation.current = () => {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (window.location.hash !== hash) window.history.pushState(null, '', hash);
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.scrollTo(target, true, 'top top');
      else target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    };
    closeMenu();
  }

  const menuButton = (
      <button ref={trigger} type="button" className={`${styles.trigger} ${mounted ? styles.fixedTrigger : ""}`} onClick={openMenu}
        aria-label="Open menu" aria-expanded={open} aria-controls="site-navigation" aria-haspopup="dialog">
        {/* <span className={styles.triggerLabel}>Menu</span> */}
        <span className={styles.bars} aria-hidden="true"><span /><span /></span>
      </button>
  );

  return (
    <>
      {mounted && <span className={styles.triggerSpace} aria-hidden="true" />}
      {mounted ? createPortal(menuButton, document.body) : menuButton}

      <dialog ref={dialog} id="site-navigation" className={styles.dialog} data-closing={closing} aria-label="Site navigation" onKeyDown={handleKeyDown}
        onCancel={event => { event.preventDefault(); closeMenu(); }}
        onClose={() => { unlockScroll(); setOpen(false); setClosing(false); closingRef.current = false; }}>
        <div ref={panel} className={styles.panel} onAnimationEnd={event => { if (event.target === event.currentTarget && closingRef.current) finishClose(); }}>
          <div className={styles.header}>
            <a href="#main" className={styles.brand} aria-label="The Parker Collective home" onClickCapture={handleNavigate}>
              <span>the parker</span><span>collective <span className={styles.brandMark} aria-hidden="true">✳</span></span>
            </a>
            <div className={styles.actions}>
              <a href="#inquiry" className={styles.inquire} onClickCapture={handleNavigate}>Let’s talk <span aria-hidden="true">↗</span></a>
              <button ref={closeButton} type="button" className={styles.close} aria-label="Close menu" onClick={closeMenu}>
                <span aria-hidden="true" /><span aria-hidden="true" />
              </button>
            </div>
          </div>
          <nav className={styles.links} aria-label="Section navigation">
            {links.map(({ label, href }, index) => (
              <a key={href} href={href} className={styles.link} style={{ '--row-delay': `${100 + index * 60}ms` }} onClickCapture={handleNavigate}>
                <span className={styles.number}>0{index + 1}</span>
                <span className={styles.label}>{label}</span>
                <span className={styles.arrow} aria-hidden="true">⟶</span>
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
