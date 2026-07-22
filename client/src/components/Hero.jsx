import { useEffect, useRef, useState } from 'react';

const roles = ['Full Stack Developer', 'React Developer', 'FastAPI Architect', 'Express Expert', 'MCA Student'];

function useTypewriter(words) {
  const [text, setText] = useState('');
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = words[ri];
    let speed = isDeleting ? 40 : 70;
    if (!isDeleting && ci === currentRole.length) speed = 1800;
    else if (isDeleting && ci === 0) speed = 350;

    const t = setTimeout(() => {
      if (!isDeleting && ci < currentRole.length) {
        setText(currentRole.substring(0, ci + 1)); setCi(c => c + 1);
      } else if (!isDeleting && ci === currentRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && ci > 0) {
        setText(currentRole.substring(0, ci - 1)); setCi(c => c - 1);
      } else {
        setIsDeleting(false); setRi(r => (r + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [ci, isDeleting, ri, words]);
  return text;
}

function useCountUp(target, suffix, trigger) {
  const [val, setVal] = useState('0' + suffix);
  useEffect(() => {
    if (!trigger) return;
    const dur = 1800;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out-cubic
      setVal(Math.floor(eased * target) + suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, suffix]);
  return val;
}

export default function Hero() {
  const typedText = useTypewriter(roles);
  const heroRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations shortly after mount
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting && !counted) setCounted(true); });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  const proj = useCountUp(5, '+', counted);
  const tech = useCountUp(15, '+', counted);
  const repo = useCountUp(10, '+', counted);

  const scrollTo = id => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef}
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 90, position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center', width: '100%' }}
        className="hero-content-grid">

        {/* ── Left ── */}
        <div>
          {/* Eyebrow */}
          <div className={`section-eyebrow ${loaded ? 'anim-fade-down delay-0' : ''}`}
            style={{ opacity: loaded ? undefined : 0 }}>
            <span className="pulse-dot" />
            Available for Work
          </div>

          {/* Name */}
          <h1 className={loaded ? 'anim-fade-up delay-1' : ''}
            style={{ fontFamily: 'Outfit,sans-serif', fontSize: 'clamp(3rem,6.5vw,5.2rem)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1.05, marginBottom: '0.8rem', opacity: loaded ? undefined : 0 }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>Deependra</span>
            <span className="hero-name-grad" style={{ display: 'block' }}>Singh</span>
          </h1>

          {/* Typewriter */}
          <div className={loaded ? 'anim-fade-up delay-2' : ''}
            style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: 'var(--cyan)', fontWeight: 600, marginBottom: '1.2rem', minHeight: '1.8em', fontFamily: 'JetBrains Mono,monospace', opacity: loaded ? undefined : 0 }}>
            <span>{typedText}</span><span className="typed-cursor" />
          </div>

          {/* Description */}
          <p className={loaded ? 'anim-fade-up delay-3' : ''}
            style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 520, marginBottom: '2.2rem', opacity: loaded ? undefined : 0 }}>
            Building scalable, high-performance web applications with modern technologies. Passionate about clean code, great UX, and turning complex ideas into elegant digital experiences.
          </p>

          {/* Buttons */}
          <div className={loaded ? 'anim-fade-up delay-4' : ''}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', opacity: loaded ? undefined : 0 }}>
            <button className="btn-primary" onClick={() => scrollTo('#projects')}
              style={{ position: 'relative', overflow: 'hidden' }}>
              View My Work ✨
            </button>
            <a href="/Deependra-Singh-RESUME.pdf" download className="btn-ghost">
              Download CV 📄
            </a>
          </div>

          {/* Stats */}
          <div className={loaded ? 'anim-fade-up delay-5' : ''}
            style={{ display: 'flex', gap: '2.8rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', opacity: loaded ? undefined : 0 }}>
            {[
              { id: 's-proj', val: proj, label: 'Projects Built' },
              { id: 's-tech', val: tech, label: 'Technologies' },
              { id: 's-repo', val: repo, label: 'GitHub Repos' },
            ].map(s => (
              <div key={s.id} style={{ transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                <div id={s.id} style={{ fontFamily: 'Outfit,sans-serif', fontSize: '2.2rem', fontWeight: 900, background: 'var(--grad-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontWeight: 600, marginTop: '0.3rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Terminal Card ── */}
        <div className={loaded ? 'anim-fade-right delay-2' : ''}
          style={{ position: 'relative', opacity: loaded ? undefined : 0 }}>
          {/* Glow ring */}
          <div className="anim-glow" style={{ position: 'absolute', inset: -20, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)', filter: 'blur(35px)', zIndex: -1 }} />

          {/* Terminal */}
          <div className="grad-border" style={{ background: 'var(--bg-card)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 20, padding: '1.6rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.84rem', lineHeight: 1.8, boxShadow: '0 25px 60px -10px rgba(0,0,0,0.8), 0 0 25px rgba(56, 189, 248, 0.15)', position: 'relative', zIndex: 2 }}>
            {/* Terminal bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border)' }}>
              {['#ff5f56','#ffbd2e','#27c93f'].map(c => (
                <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block', cursor: 'default' }} />
              ))}
              <span style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>portfolio.json</span>
            </div>
            {/* Content */}
            <div>
              <span style={{ color: '#64748b' }}>{'// Developer Profile'}</span><br />
              <span style={{ color: '#94a3b8' }}>{'{'}</span><br />
              <span style={{ color: '#c084fc' }}>&nbsp;&nbsp;"name"</span><span style={{ color: 'var(--text-sub)' }}>: </span><span style={{ color: '#34d399' }}>"Deependra Singh"</span>,<br />
              <span style={{ color: '#c084fc' }}>&nbsp;&nbsp;"role"</span><span style={{ color: 'var(--text-sub)' }}>: </span><span style={{ color: '#34d399' }}>"Full Stack Dev"</span>,<br />
              <span style={{ color: '#c084fc' }}>&nbsp;&nbsp;"stack"</span><span style={{ color: 'var(--text-sub)' }}>: </span><span style={{ color: '#94a3b8' }}>[</span><br />
              <span style={{ color: '#38bdf8' }}>&nbsp;&nbsp;&nbsp;&nbsp;"React"</span>, <span style={{ color: '#38bdf8' }}>"FastAPI"</span>,<br />
              <span style={{ color: '#38bdf8' }}>&nbsp;&nbsp;&nbsp;&nbsp;"Express"</span>, <span style={{ color: '#38bdf8' }}>"Python"</span><br />
              <span style={{ color: '#94a3b8' }}>&nbsp;&nbsp;]</span>,<br />
              <span style={{ color: '#c084fc' }}>&nbsp;&nbsp;"status"</span><span style={{ color: 'var(--text-sub)' }}>: </span><span style={{ color: '#fbbf24' }}>"open_to_work"</span><br />
              <span style={{ color: '#94a3b8' }}>{'}'}</span>
              <span className="t-cursor-blink" />
            </div>
          </div>

          {/* Floating badges */}
          {[
            { cls: 'float-1', style: { top: '-1.5rem', right: '-1rem', borderColor: 'rgba(56, 189, 248, 0.4)' }, text: '⚡ React 19' },
            { cls: 'float-2', style: { bottom: '1rem', left: '-2rem', borderColor: 'rgba(139, 92, 246, 0.4)' }, text: '🐍 FastAPI' },
            { cls: 'float-3', style: { top: '45%', right: '-2.5rem', borderColor: 'rgba(52, 211, 153, 0.4)' }, text: '🟢 Express' },
          ].map((b, i) => (
            <div key={i} className={b.cls} style={{
              position: 'absolute', background: 'rgba(15, 23, 42, 0.85)',
              border: `1px solid ${b.style.borderColor}`,
              borderRadius: 50, padding: '0.5rem 1.1rem',
              fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6), 0 0 15px rgba(56,189,248,0.15)',
              backdropFilter: 'blur(12px)', zIndex: 3,
              fontFamily: 'JetBrains Mono,monospace',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
              ...b.style,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(56,189,248,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)'; }}>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-content-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50px;
          background: rgba(255,255,255,0.15);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        .btn-primary:hover::after { transform: scaleX(1); }
      `}</style>
    </section>
  );
}
