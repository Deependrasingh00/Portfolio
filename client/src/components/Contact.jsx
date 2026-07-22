import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const contactLinks = [
  { icon: '📧', label: 'Email', value: 'deependrasingh.08equal@gmail.com', href: 'mailto:deependrasingh.08equal@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'https://www.linkedin.com/in/deependra-singh-158886396/', href: 'https://www.linkedin.com/in/deependra-singh-158886396/' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/Deependrasingh00', href: 'https://github.com/Deependrasingh00' },
];

const inputStyle = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
  background: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '0.85rem 1.1rem',
  color: '#f8fafc',
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [headRef, headVisible] = useInView();
  const [leftRef, leftVisible] = useInView();
  const [rightRef, rightVisible] = useInView();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) { alert('Please fill in your name, email, and message.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: form.subject || 'Portfolio Contact' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '6.5rem 5%', maxWidth: 1280, margin: '0 auto' }}>
      <div ref={headRef}>
        <div className={`section-eyebrow ${headVisible ? 'anim-fade-down delay-0' : ''}`}
          style={{ opacity: headVisible ? undefined : 0 }}>
          <span className="pulse-dot" />
          Get In Touch
        </div>
        <h2 className={headVisible ? 'anim-fade-up delay-1' : ''}
          style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1rem', opacity: headVisible ? undefined : 0 }}>
          Let's <span className="shimmer-text">Work Together</span>
        </h2>
        <p className={headVisible ? 'anim-fade-up delay-2' : ''}
          style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: 540, lineHeight: 1.7, opacity: headVisible ? undefined : 0 }}>
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start', marginTop: '3.5rem' }}
        className="contact-grid-resp">
        {/* Left */}
        <div ref={leftRef} className={leftVisible ? 'anim-fade-left delay-0' : ''} style={{ opacity: leftVisible ? undefined : 0 }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.4rem' }}>Contact Info</h3>
          {contactLinks.map((cl, i) => (
            <a key={i} href={cl.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.1rem 1.4rem', textDecoration: 'none', color: 'var(--text)', marginBottom: '1rem', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-cyan)'; e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '1.5rem', width: 44, height: 44, borderRadius: 12, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {cl.icon}
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem' }}>{cl.label}</strong>
                <span style={{ color: 'var(--text-sub)', fontSize: '0.83rem' }}>{cl.value}</span>
              </div>
            </a>
          ))}

          <div style={{ background: 'rgba(0,255,163,0.06)', border: '1px solid rgba(0,255,163,0.2)', borderRadius: 16, padding: '1.4rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.4rem' }}>
              <span className="pulse-dot" /> Currently Available
            </div>
            <div style={{ color: 'var(--text-sub)', fontSize: '0.83rem', lineHeight: 1.5 }}>
              I'm open to freelance projects, full-time positions, and exciting collaborations. Response time: within 24 hours.
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div ref={rightRef}
          className={`grad-border ${rightVisible ? 'anim-fade-right delay-1' : ''}`}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 24, padding: '2.2rem', opacity: rightVisible ? undefined : 0, transition: 'box-shadow 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,212,255,0.15)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem' }}>Send a Message</div>
          <div style={{ color: 'var(--text-sub)', fontSize: '0.86rem', marginBottom: '1.6rem' }}>Fill out the form and I'll get back to you shortly.</div>

          <form onSubmit={handleSubmit}>
            {/* Name + Email row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Deependra Singh' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.id} style={{ flex: '1 1 160px', minWidth: 0, marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                  <input
                    type={f.type} name={f.id} value={form[f.id]} onChange={handleChange}
                    placeholder={f.placeholder}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
              <input
                type="text" name="subject" value={form.subject} onChange={handleChange}
                placeholder="Project Inquiry"
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <button type="submit" disabled={status === 'loading'}
              style={{ width: '100%', background: 'var(--grad-main)', color: '#fff', padding: '0.95rem', borderRadius: 50, fontWeight: 800, fontSize: '0.95rem', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(0,212,255,0.3)', opacity: status === 'loading' ? 0.7 : 1 }}>
              {status === 'loading' ? 'Sending…' : 'Send Message 🚀'}
            </button>

            {status === 'success' && (
              <div style={{ marginTop: '1rem', padding: '0.9rem', background: 'rgba(0,255,163,0.1)', border: '1px solid rgba(0,255,163,0.3)', borderRadius: 12, color: 'var(--emerald)', fontSize: '0.86rem', textAlign: 'center', fontWeight: 600 }}>
                ✅ Message Sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{ marginTop: '1rem', padding: '0.9rem', background: 'rgba(255,112,67,0.1)', border: '1px solid rgba(255,112,67,0.3)', borderRadius: 12, color: 'var(--orange)', fontSize: '0.86rem', textAlign: 'center', fontWeight: 600 }}>
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .contact-grid-resp { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
