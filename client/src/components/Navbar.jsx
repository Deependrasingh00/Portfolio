import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 40);
      const allSecs = document.querySelectorAll('section[id]');
      let c = '';
      allSecs.forEach(s => { if (sy >= s.offsetTop - 140) c = s.id; });
      setActiveLink(c);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
    setMobOpen(false);
  };

  return (
    <>
      <nav
        id="nav"
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '0.9rem 0' : '1.4rem 0',
          background: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.8)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#hero" onClick={e => handleAnchor(e, '#hero')}
            style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.6rem', fontWeight: 900, background: 'var(--grad-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px', textDecoration: 'none' }}>
            DS<span style={{ color: 'var(--cyan)', WebkitTextFillColor: 'var(--cyan)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none', margin: 0, padding: 0 }}
            className="hidden md:flex">
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={e => handleAnchor(e, l.href)}
                  style={{
                    color: activeLink === l.href.slice(1) ? 'var(--cyan)' : 'var(--text-sub)',
                    textDecoration: 'none', fontWeight: 500, fontSize: '0.92rem',
                    transition: 'color 0.3s', position: 'relative',
                  }}
                >
                  {l.label}
                  {activeLink === l.href.slice(1) && (
                    <span style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 2, background: 'var(--cyan)', borderRadius: 2 }} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" onClick={e => handleAnchor(e, '#contact')}
            className="hidden md:inline-flex"
            style={{ background: 'var(--grad-main)', color: '#fff', textDecoration: 'none', padding: '0.6rem 1.4rem', borderRadius: 50, fontWeight: 700, fontSize: '0.88rem', transition: 'transform 0.3s, box-shadow 0.3s' }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = 'var(--glow)'; }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none'; }}
          >
            Hire Me 🚀
          </a>

          {/* Hamburger */}
          <button
            id="ham"
            onClick={() => setMobOpen(o => !o)}
            className="md:hidden"
            style={{ display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer', background: 'none', border: 'none', padding: 5 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--text)', borderRadius: 2,
                transition: '0.3s',
                transform: mobOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobOpen && (
        <div id="mob" style={{
          position: 'fixed', top: 60, left: 0, width: '100%',
          background: 'rgba(6,9,14,0.96)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', zIndex: 99,
          padding: '1.5rem 5%'
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(l => (
              <li key={l.href} style={{ marginBottom: '1rem' }}>
                <a href={l.href} onClick={e => handleAnchor(e, l.href)}
                  style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
