import { useInView } from '../hooks/useInView';

const timelineItems = [
  {
    year: '2026– Present',
    title: 'MCA – Master of Computer Applications',
    sub: 'Pursuing Higher Education',
    desc: 'Deepening expertise in advanced algorithms, distributed systems, machine learning, and cloud computing. Building real-world projects as part of curriculum.',
    dot: 'var(--cyan)',
  },
  {
    year: '2025 – 2026',
    title: 'Full Stack Developer (Freelance)',
    sub: 'Independent Projects',
    desc: 'Delivered multiple client projects including e-commerce platforms, admin dashboards, and REST API backends using Express, FastAPI, and React.',
    dot: 'var(--violet2)',
  },
  {
    year: '2022 – 2025',
    title: 'BCA – Bachelor of Computer Applications',
    sub: 'Computer Science Degree',
    desc: 'Graduated with strong foundation in programming, data structures, databases, and web technologies. Started web development journey with Python and JavaScript.',
    dot: 'var(--emerald)',
  },
];

const achCards = [
  { icon: '🏆', num: '5+', title: 'Projects Deployed', desc: 'Live production applications serving real users.' },
  { icon: '⭐', num: '10+', title: 'GitHub Repos', desc: 'Open source and personal projects.' },
  { icon: '🎓', num: 'MCA', title: 'Education', desc: 'Master of Computer Applications student.' },
  { icon: '💡', num: '15+', title: 'Tech Skills', desc: 'Frameworks, languages, and tools mastered.' },
];

function TimelineItem({ t, index }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ position: 'relative', marginBottom: index < timelineItems.length - 1 ? '2.5rem' : 0 }}>
      <div style={{ position: 'absolute', top: 0, left: '-2.35rem', width: 14, height: 14, borderRadius: '50%', background: t.dot, border: '3px solid var(--bg)', boxShadow: `0 0 15px ${t.dot}`, transition: 'transform 0.3s' }} />
      <div className={`tl-card grad-border ${visible ? 'anim-fade-left' : ''}`}
        style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.6rem',
          transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          animationDelay: (index * 150) + 'ms',
          opacity: visible ? undefined : 0,
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
        <div style={{ color: 'var(--cyan)', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono,monospace', marginBottom: '0.4rem' }}>{t.year}</div>
        <div style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.3rem' }}>{t.title}</div>
        <div style={{ color: 'var(--indigo-light)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.6rem' }}>{t.sub}</div>
        <div style={{ color: 'var(--text-sub)', fontSize: '0.88rem', lineHeight: 1.6 }}>{t.desc}</div>
      </div>
    </div>
  );
}

function AchCard({ a, index }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref}
      className={`ach-card grad-border ${visible ? 'anim-scale-in' : ''}`}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.6rem',
        textAlign: 'center', transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        animationDelay: (index * 100) + 'ms', cursor: 'default',
        opacity: visible ? undefined : 0,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
      <span style={{ fontSize: '2rem', marginBottom: '0.6rem', display: 'block', transition: 'transform 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.3) rotate(-5deg)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
        {a.icon}
      </span>
      <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: '2.2rem', fontWeight: 900, background: 'var(--grad-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.2rem' }}>{a.num}</div>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.3rem' }}>{a.title}</div>
      <div style={{ color: 'var(--text-sub)', fontSize: '0.78rem', lineHeight: 1.4 }}>{a.desc}</div>
    </div>
  );
}

export default function Experience() {
  const [headRef, headVisible] = useInView();
  const [achRef, achVisible] = useInView();

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div ref={headRef}>
        <div className={`section-eyebrow ${headVisible ? 'anim-fade-down delay-0' : ''}`}
          style={{ opacity: headVisible ? undefined : 0 }}>
          <span className="pulse-dot" />
          Journey
        </div>
        <h2 className={headVisible ? 'anim-fade-up delay-1' : ''}
          style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', opacity: headVisible ? undefined : 0 }}>
          Education & <span className="shimmer-text">Experience</span>
        </h2>
        <p className={headVisible ? 'anim-fade-up delay-2' : ''}
          style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7, opacity: headVisible ? undefined : 0 }}>
          My academic and professional journey so far.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline-line" style={{ position: 'relative', marginTop: '3.5rem', paddingLeft: '2rem' }}>
        {timelineItems.map((t, i) => (
          <TimelineItem key={i} t={t} index={i} />
        ))}
      </div>

      {/* Achievements */}
      <div style={{ marginTop: '5rem' }}>
        <h3 ref={achRef}
          className={achVisible ? 'anim-fade-up delay-0' : ''}
          style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', opacity: achVisible ? undefined : 0 }}>
          Achievements & <span className="shimmer-text">Stats</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.2rem' }}>
          {achCards.map((a, i) => (
            <AchCard key={i} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
