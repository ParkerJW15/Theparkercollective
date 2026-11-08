'use client';

import { useEffect, useRef } from 'react';

// Keep the same backgrounds, but only load/play a video while it can be seen.
export default function BackgroundVideo({ src, ...props }) {
  const video = useRef(null);

  useEffect(() => {
    const player = video.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    const underlay = player.closest('[data-section-underlay]');
    let inView = false;
    let disposed = false;
    let playPending = false;

    const canPlay = () => !disposed && inView && !document.hidden
      && !motion.matches && !connection?.saveData
      && !underlay?.hasAttribute('data-media-covered');

    const updatePlayback = () => {
      if (!canPlay()) {
        player.pause();
        return;
      }
      if (!player.getAttribute('src')) player.src = src;
      if (player.paused && !playPending) {
        playPending = true;
        player.play().then(() => {
          playPending = false;
          // A scroll/visibility change can occur while play() is pending.
          if (!canPlay()) player.pause();
        }).catch(() => { playPending = false; });
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0 });
    observer.observe(player);

    // A pinned section can be in the viewport yet completely covered by About.
    const coverObserver = underlay ? new MutationObserver(updatePlayback) : null;
    coverObserver?.observe(underlay, { attributes: true, attributeFilter: ['data-media-covered'] });
    document.addEventListener('visibilitychange', updatePlayback);
    motion.addEventListener('change', updatePlayback);
    connection?.addEventListener('change', updatePlayback);

    return () => {
      disposed = true;
      observer.disconnect();
      coverObserver?.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      motion.removeEventListener('change', updatePlayback);
      connection?.removeEventListener('change', updatePlayback);
      player.pause();
    };
  }, [src]);

  return <video {...props} ref={video} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />;
}
