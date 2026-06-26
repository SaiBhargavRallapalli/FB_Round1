'use client';

import { useEffect, useRef } from 'react';
import { ArrowRightIcon, SparklesIcon } from './icons';

const STATS = [
  { value: '10M+', label: 'API Calls Daily' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '3.2x', label: 'Avg. Productivity Gain' },
  { value: '500+', label: 'Enterprise Clients' },
];

const LOGOS = ['Acme Corp', 'Veritas', 'Nexgen', 'Orbital', 'Synapse', 'Quantum'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-load');
    elements?.forEach((el) => (el as HTMLElement).classList.add('loaded'));
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero — AI Data Automation Platform"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} aria-hidden="true" />

      {/* Ambient glows */}
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(17,76,90,0.45) 0%, transparent 70%)',
          top: '-150px', left: '50%', transform: 'translateX(-50%)',
        }}
      />
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(255,200,1,0.12) 0%, transparent 70%)',
          bottom: '80px', right: '8%',
        }}
      />
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{
          width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(255,153,50,0.10) 0%, transparent 70%)',
          top: '30%', left: '5%',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '860px', width: '100%', textAlign: 'center' }}>

        {/* Eyebrow badge */}
        <div
          className="animate-on-load delay-50"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 200, 1, 0.10)',
            border: '1px solid rgba(255, 200, 1, 0.30)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '28px',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: '#FFC801',
            letterSpacing: '0.04em',
          }}
        >
          <SparklesIcon size={14} />
          Powered by Next-Gen LLM Infrastructure
        </div>

        {/* H1 */}
        <h1
          className="animate-on-load delay-100"
          style={{
            fontFamily: 'var(--font-display), monospace',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            marginBottom: '24px',
            color: 'var(--arctic-powder)',
          }}
        >
          Automate Intelligence.{' '}
          <span className="gradient-text">Accelerate Everything.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-on-load delay-150"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--mystic-mint)',
            lineHeight: 1.75,
            maxWidth: '620px',
            margin: '0 auto 40px',
            fontFamily: 'var(--font-body), system-ui, sans-serif',
          }}
        >
          NexusAI transforms raw data into autonomous workflows using adaptive machine learning —
          slashing operational overhead while compounding decision velocity at enterprise scale.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-on-load delay-200"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '64px',
          }}
        >
          <a href="#pricing" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            Start Building Free
            <ArrowRightIcon size={18} />
          </a>
          <a href="#features" className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            Explore Features
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-on-load delay-250 hero-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--color-border)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '64px',
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{ background: 'var(--color-card)', padding: '24px 20px', textAlign: 'center' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display), monospace',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--forsythia)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--mystic-mint)',
                  marginTop: '4px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="animate-on-load delay-300" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-text-muted)',
              fontWeight: 500,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: 'var(--font-body), system-ui, sans-serif',
            }}
          >
            Trusted by engineering teams at
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {LOGOS.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-display), monospace',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--mystic-mint)',
                  letterSpacing: '0.05em',
                  opacity: 0.5,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
