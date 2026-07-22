import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    let animId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };
    window.addEventListener('mousemove', onMove);

    function animRing() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animId = requestAnimationFrame(animRing);
    }
    animRing();

    const hoverEls = document.querySelectorAll('a, button, input, textarea, .project-card, .about-card');
    const onEnter = () => {
      ring.style.width = '55px';
      ring.style.height = '55px';
      ring.style.borderColor = '#34d399';
    };
    const onLeave = () => {
      ring.style.width = '38px';
      ring.style.height = '38px';
      ring.style.borderColor = 'rgba(56, 189, 248, 0.5)';
    };
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
