import { useEffect, useState } from 'react';

// Tracks which section id is currently in view for active-nav highlighting.
export default function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0] || '');

  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids, offset]);

  return active;
}
