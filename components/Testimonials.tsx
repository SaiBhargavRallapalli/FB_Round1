'use client';

import { QuoteIcon, StarIcon } from './icons';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "NexusAI reduced our data pipeline build time by 80%. What used to take two engineers a week now ships in an afternoon. The automation quality is genuinely remarkable.",
    name: "Sarah Chen",
    role: "Head of Data Engineering",
    company: "Orbital Systems",
    initials: "SC",
    accent: "#FFC801",
  },
  {
    quote: "The real-time analytics dashboard alone paid for the subscription in week one. We caught three critical anomalies before they hit production. Incredible observability.",
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "Veritas Labs",
    initials: "MR",
    accent: "#FF9932",
  },
  {
    quote: "We evaluated six platforms before choosing NexusAI. The native integrations and security posture — SOC 2 Type II with BYOK encryption — sealed the deal for our compliance team.",
    name: "Priya Nair",
    role: "VP Engineering",
    company: "Nexgen Finance",
    initials: "PN",
    accent: "#D9E8E2",
  },
  {
    quote: "Scaled from 10k to 2M daily API calls in three months without touching infrastructure config. NexusAI's auto-scaling is genuinely hands-off. Our ops team can't believe it.",
    name: "James Liu",
    role: "Platform Architect",
    company: "Synapse Cloud",
    initials: "JL",
    accent: "#FFC801",
  },
  {
    quote: "The ML model hub changed how we think about production AI. A/B testing models without downtime was a fantasy before NexusAI — now it's our default deployment flow.",
    name: "Fatima Al-Hassan",
    role: "ML Engineering Lead",
    company: "Quantum Dynamics",
    initials: "FA",
    accent: "#FF9932",
  },
  {
    quote: "Customer support resolved our custom connector issue in under 2 hours. The quality of the team matches the quality of the product — best-in-class across the board.",
    name: "Tom Bergstrom",
    role: "Senior Backend Engineer",
    company: "Acme Corp",
    initials: "TB",
    accent: "#D9E8E2",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forsythia)', marginBottom: '12px', fontFamily: 'var(--font-display), monospace' }}>
          Social Proof
        </p>
        <h2 id="testimonials-heading" style={{ fontFamily: 'var(--font-display), monospace', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '16px', color: 'var(--arctic-powder)' }}>
          Loved by{' '}
          <span className="gradient-text">Engineering Teams</span>
        </h2>
        <p style={{ color: 'var(--mystic-mint)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
          Thousands of teams rely on NexusAI to ship faster and scale smarter.
        </p>
      </div>

      <div className="testimonials-masonry" style={{ columns: 'auto 340px', gap: '20px' }}>
        {TESTIMONIALS.map((t, i) => (
          <article
            key={t.name}
            className="testimonial-card scroll-reveal"
            style={{ breakInside: 'avoid', marginBottom: '20px', animationDelay: `${i * 50}ms` }}
            aria-label={`Testimonial from ${t.name}`}
          >
            <QuoteIcon size={28} style={{ color: t.accent, marginBottom: '16px' }} />

            <blockquote>
              <p style={{ fontSize: '0.925rem', color: 'var(--mystic-mint)', lineHeight: 1.75, marginBottom: '20px', fontStyle: 'italic', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                aria-hidden="true"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `${t.accent}18`, border: `1px solid ${t.accent}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.72rem', fontWeight: 700, color: t.accent, flexShrink: 0,
                  fontFamily: 'var(--font-display), monospace',
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--arctic-powder)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>{t.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>{t.role} · {t.company}</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} size={12} filled style={{ color: '#FFC801' }} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
