import { useInView } from '../hooks/useInView';

const aboutCards = [
  { icon: '🎓', title: 'MCA Student', desc: 'Pursuing Master of Computer Applications, building strong CS fundamentals.' },
  { icon: '💻', title: 'Full Stack Dev', desc: 'React frontends, FastAPI & Express backends, REST APIs.' },
  { icon: '🚀', title: 'Open Source', desc: 'Contributing to open source projects and learning from the community.' },
  { icon: '🌍', title: 'Remote Ready', desc: 'Available for remote work opportunities globally.' },
];

const skillTags = ['React', 'Python', 'FastAPI', 'Express', 'JavaScript', 'MongoDB', 'Node.js', 'Git'];

export default function About() {
  const [headRef, headVisible] = useInView();
  const [leftRef, leftVisible] = useInView();
  const [rightRef, rightVisible] = useInView();

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div ref={headRef}>
        <div className={`section-eyebrow ${headVisible ? 'anim-fade-down delay-0' : ''}`}
          style={{ opacity: headVisible ? undefined : 0 }}>
          <span className="pulse-dot" />
          About Me
        </div>
        <h2 className={headVisible ? 'anim-fade-up delay-1' : ''}
          style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', opacity: headVisible ? undefined : 0 }}>
          The Developer <span className="shimmer-text">Behind the Code</span>
        </h2>
        <p className={headVisible ? 'anim-fade-up delay-2' : ''}
          style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7, opacity: headVisible ? undefined : 0 }}>
          Passionate about crafting digital experiences that make a difference.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '3.5rem' }}
        className="about-grid-resp">

        {/* Left */}
        <div ref={leftRef}>
          <div className={leftVisible ? 'anim-fade-left delay-0' : ''} style={{ opacity: leftVisible ? undefined : 0 }}>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Hey! I'm <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Deependra Singh</span>, a passionate Full Stack Developer and MCA student who loves turning complex problems into elegant, scalable solutions.
            </p>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              I specialize in building end-to-end web applications using <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>React</span>, <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>FastAPI</span>, and <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Express</span>. I thrive on challenges and continuously push myself to learn cutting-edge technologies.
            </p>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              When I'm not coding, I'm exploring new frameworks, contributing to open source, or diving deep into system design concepts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '2rem' }}>
            {aboutCards.map((c, i) => (
              <div key={i}
                className={`about-card grad-border ${leftVisible ? 'anim-scale-in' : ''}`}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.4rem',
                  transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  animationDelay: (i * 100 + 200) + 'ms',
                  cursor: 'default',
                  opacity: leftVisible ? undefined : 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ fontSize: '1.8rem', marginBottom: '0.6rem', display: 'block', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  {c.icon}
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{c.title}</h4>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.83rem', lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile card */}
        <div ref={rightRef}
          className={`grad-border ${rightVisible ? 'anim-fade-right delay-1' : ''}`}
          style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 24, padding: '2.5rem 2rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            opacity: rightVisible ? undefined : 0,
            transition: 'box-shadow 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

          {/* Subtle background glow */}
          <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="anim-glow" style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--grad-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit,sans-serif', fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '0 auto 1.4rem', boxShadow: '0 0 0 4px rgba(0,212,255,0.2)', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            DS
          </div>

          <div style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>Deependra Singh</div>
          <div style={{ color: 'var(--cyan)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', fontFamily: 'JetBrains Mono,monospace' }}>
            Full Stack Developer
          </div>
          <div style={{ color: 'var(--text-sub)', fontSize: '0.84rem', marginBottom: '1.4rem' }}>📍 India</div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', justifyContent: 'center', marginBottom: '1.6rem' }}>
            {skillTags.map((t, i) => (
              <span key={t}
                className={rightVisible ? 'anim-scale-in' : ''}
                style={{
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                  borderRadius: 50, padding: '0.28rem 0.8rem', fontSize: '0.76rem', color: 'var(--cyan)', fontWeight: 600,
                  transition: 'all 0.3s', cursor: 'default',
                  animationDelay: (i * 60 + 300) + 'ms',
                  opacity: rightVisible ? undefined : 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; e.currentTarget.style.transform = 'none'; }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,163,0.1)', border: '1px solid rgba(0,255,163,0.3)', borderRadius: 50, padding: '0.4rem 1.1rem', fontSize: '0.8rem', color: 'var(--emerald)', fontWeight: 700 }}>
            <span className="pulse-dot" /> Available for Opportunities
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ .about-grid-resp { grid-template-columns: 1fr !important; } }
        @media(max-width:768px){ .about-grid-resp > div:first-child > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
