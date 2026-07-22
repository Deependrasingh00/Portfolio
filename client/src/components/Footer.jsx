import { useEffect, useState } from 'react';

const footerLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { href: 'https://github.com/Deependrasingh00', label: '🐙' },
  { href: 'https://www.linkedin.com/in/deependra-singh-158886396/', label: '💼' },
  { href: 'mailto:deependrasingh.08equal@gmail.com', label: '📧' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleAnchor = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
  };

  return (
    <>
      <footer style={{ background: '#04060a', borderTop: '1px solid var(--border)', padding: '3.5rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem' }}>
          <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.4rem', fontWeight: 900, background: 'var(--grad-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DS<span style={{ color: 'var(--cyan)', WebkitTextFillColor: 'var(--cyan)' }}>.</span>
          </div>

          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {footerLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => handleAnchor(e, l.href)}
                  style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-sub)'}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
                {s.label}
              </a>
            ))}
          </div>

          <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Deependra Singh. Crafted with ❤️ using React & Tailwind CSS.
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button id="scrolltop" onClick={scrollToTop}
        className={showTop ? 'show' : ''}
        aria-label="Scroll to top"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--bg-card)', border: '1px solid var(--border-cyan)',
          color: 'var(--cyan)', fontSize: '1.2rem',
          cursor: 'pointer', zIndex: 98,
          display: showTop ? 'flex' : 'none',
          alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--cyan)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'none'; }}>
        ↑
      </button>
    </>
  );
}
