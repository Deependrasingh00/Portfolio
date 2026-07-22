import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    emoji: '🤖',
    bg: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
    title: 'AI Chat Platform',
    desc: 'A full-stack AI-powered chat application with LangChain, FastAPI backend, and React frontend. Features real-time streaming, conversation history, and multi-model support.',
    tags: ['React', 'FastAPI', 'LangChain', 'MongoDB', 'WebSocket'],
    cat: 'ai fullstack',
    demo: '#',
    github: 'https://github.com/Deependrasingh00',
  },
  {
    emoji: '🛒',
    bg: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
    title: 'E-Commerce Platform',
    desc: 'Scalable e-commerce solution built with Express and Node.js. Includes product management, cart, payment integration, and admin dashboard.',
    tags: ['Express', 'Node.js', 'React', 'MongoDB', 'Stripe'],
    cat: 'fullstack backend',
    demo: '#',
    github: 'https://github.com/Deependrasingh00',
  },
  {
    emoji: '📊',
    bg: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
    title: 'Analytics Dashboard',
    desc: 'Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features. Built with React and D3.js.',
    tags: ['React', 'D3.js', 'FastAPI', 'Redis', 'WebSocket'],
    cat: 'frontend ai',
    demo: '#',
    github: 'https://github.com/Deependrasingh00',
  },
  {
    emoji: '🔐',
    bg: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
    title: 'Auth Microservice',
    desc: 'Production-ready JWT authentication microservice with refresh tokens, OAuth2, and role-based access control.',
    tags: ['FastAPI', 'JWT', 'OAuth2', 'Redis'],
    cat: 'backend',
    demo: '#',
    github: 'https://github.com/Deependrasingh00',
  },
  {
    emoji: '💬',
    bg: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
    title: 'Real-time Chat App',
    desc: 'WebSocket-based real-time chat app with rooms, direct messages, file sharing, and online status.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    cat: 'fullstack frontend',
    demo: '#',
    github: 'https://github.com/Deependrasingh00',
  },
];

const filters = ['all', 'fullstack', 'frontend', 'backend', 'ai'];

function ProjectCard({ p, index, visible }) {
  return (
    <div
      className={`project-card grad-border ${visible ? 'anim-fade-up' : ''}`}
      style={{
        background: 'var(--bg-card)', backdropFilter: 'blur(16px)', border: '1px solid var(--border)', borderRadius: 20,
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        animationDelay: (index * 100) + 'ms',
        opacity: visible ? undefined : 0,
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>

      {/* Image / Banner */}
      <div style={{ height: 180, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        {/* Shimmer overlay on hover */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)', backgroundSize: '200% 100%', transition: 'background-position 0.6s' }} />
        <span style={{ fontSize: '3.8rem', zIndex: 2, transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)', display: 'block', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
          {p.emoji}
        </span>
      </div>

      <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem', flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.4rem' }}>
          {p.tags.map(t => (
            <span key={t} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 50, padding: '0.22rem 0.7rem', fontSize: '0.74rem', color: 'var(--text-sub)', fontFamily: 'JetBrains Mono,monospace', transition: 'all 0.2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.1)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-sub)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          <a href={p.demo} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem', borderRadius: 50, fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none', background: 'var(--grad-main)', color: '#fff', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.25)' }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.25)'; }}>
            Live Demo ↗
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem', borderRadius: 50, fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none', background: 'rgba(255,255,255,0.04)', color: 'var(--text)', border: '1px solid var(--border)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.color = 'var(--cyan)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)'; e.target.style.transform = 'none'; }}>
            GitHub ⭐
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('all');
  const [headRef, headVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  const filtered = projects.filter(p => active === 'all' || p.cat.includes(active));

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div ref={headRef}>
        <div className={`section-eyebrow ${headVisible ? 'anim-fade-down delay-0' : ''}`}
          style={{ opacity: headVisible ? undefined : 0 }}>
          <span className="pulse-dot" />
          Portfolio
        </div>
        <h2 className={headVisible ? 'anim-fade-up delay-1' : ''}
          style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', opacity: headVisible ? undefined : 0 }}>
          Featured <span className="shimmer-text">Projects</span>
        </h2>
        <p className={headVisible ? 'anim-fade-up delay-2' : ''}
          style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7, opacity: headVisible ? undefined : 0 }}>
          A selection of projects that showcase my skills across the full stack.
        </p>
      </div>

      {/* Filter buttons */}
      <div className={headVisible ? 'anim-fade-up delay-3' : ''}
        style={{ display: 'flex', gap: '0.8rem', marginTop: '2.5rem', flexWrap: 'wrap', opacity: headVisible ? undefined : 0 }}>
        {filters.map((f, i) => (
          <button key={f} onClick={() => setActive(f)}
            style={{
              background: active === f ? 'var(--cyan)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${active === f ? 'var(--cyan)' : 'var(--border)'}`,
              color: active === f ? '#000' : 'var(--text-sub)',
              padding: '0.5rem 1.3rem', borderRadius: 50,
              fontSize: '0.86rem', fontWeight: active === f ? 700 : 600,
              cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onMouseEnter={e => { if (active !== f) { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
            onMouseLeave={e => { if (active !== f) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-sub)'; e.currentTarget.style.transform = 'none'; }}}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.8rem', marginTop: '2.5rem' }}>
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} visible={gridVisible} />
        ))}
      </div>
    </section>
  );
}
