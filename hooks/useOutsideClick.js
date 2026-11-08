'use client';

import { useEffect } from 'react';

// Works with mouse, touch and pen. Listen only while the surface is open.
export default function useOutsideClick(ref, onOutside, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = event => {
      if (event.button !== 0) return;
      const element = ref.current;
      if (!element || event.composedPath().includes(element)) return;
      onOutside(event);
    };

    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [ref, onOutside, enabled]);
}
