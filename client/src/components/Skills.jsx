import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', pct: 90 },
      { name: 'JavaScript / TypeScript', pct: 85 },
      { name: 'HTML & CSS / Tailwind', pct: 92 },
    ],
  },
  {
    icon: '🐍',
    title: 'Backend',
    skills: [
      { name: 'Python / FastAPI', pct: 88 },
      { name: 'Node.js / Express', pct: 85 },
      { name: 'REST API Design', pct: 90 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB / Mongoose', pct: 84 },
      { name: 'Git / GitHub', pct: 90 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Cloud',
    skills: [
      { name: 'LangChain / OpenAI API', pct: 72 },
      { name: 'REST API Design', pct: 88 },
      { name: 'VS Code / Postman', pct: 95 },
    ],
  },
];

/* Each skill bar gets its own component so useInView is called at top level */
function SkillBar({ name, pct }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '0.4rem', fontWeight: 500 }}>
        <span style={{ color: 'var(--text)' }}>{name}</span>
        <span style={{ color: 'var(--cyan)', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem' }}>{pct}%</span>
      </div>
      <div className="bar">
        {visible && <div className="bar-fill-animated" style={{ width: pct + '%' }} />}
      </div>
    </div>
  );
}

/* Each card gets its own component so useInView is called at top level */
function SkillCard({ g, index }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref}
      className={`skill-group grad-border ${visible ? 'anim-fade-up' : ''}`}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20, padding: '1.8rem',
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        animationDelay: (index * 100) + 'ms',
        opacity: visible ? undefined : 0,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.4rem' }}>
        <div style={{ fontSize: '1.5rem', width: 42, height: 42, borderRadius: 12, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'rotate(10deg) scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
          {g.icon}
        </div>
        <span style={{ fontSize: '1.15rem', fontWeight: 700 }}>{g.title}</span>
      </div>

      {g.skills.map((s, j) => (
        <SkillBar key={j} name={s.name} pct={s.pct} />
      ))}
    </div>
  );
}

export default function Skills() {
  const [headRef, headVisible] = useInView();

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div ref={headRef}>
        <div className={`section-eyebrow ${headVisible ? 'anim-fade-down delay-0' : ''}`}
          style={{ opacity: headVisible ? undefined : 0 }}>
          <span className="pulse-dot" />
          Tech Stack
        </div>
        <h2 className={headVisible ? 'anim-fade-up delay-1' : ''}
          style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', opacity: headVisible ? undefined : 0 }}>
          Skills & <span className="shimmer-text">Technologies</span>
        </h2>
        <p className={headVisible ? 'anim-fade-up delay-2' : ''}
          style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7, opacity: headVisible ? undefined : 0 }}>
          A curated list of tools and technologies I work with daily.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem', marginTop: '3.5rem' }}>
        {skillGroups.map((g, i) => (
          <SkillCard key={i} g={g} index={i} />
        ))}
      </div>
    </section>
  );
}
