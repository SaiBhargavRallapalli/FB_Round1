'use client';

import { LogoIcon } from './icons';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'Integrations', 'Open Source'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms of Service', 'Security', 'Compliance', 'Cookies'],
};

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <LogoIcon size={28} />
              <span style={{ fontFamily: 'var(--font-display), monospace', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em', color: 'var(--arctic-powder)' }}>
                Nexus<span style={{ color: 'var(--forsythia)' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, maxWidth: '220px', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              Next-generation AI automation infrastructure for teams that ship fast.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {['SOC 2', 'GDPR', 'ISO 27001'].map((cert) => (
                <span key={cert} style={{
                  fontSize: '0.62rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px',
                  background: 'rgba(255,200,1,0.08)', border: '1px solid rgba(255,200,1,0.20)',
                  color: 'var(--forsythia)', letterSpacing: '0.04em',
                  fontFamily: 'var(--font-display), monospace',
                }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--arctic-powder)', marginBottom: '16px', fontFamily: 'var(--font-display), monospace' }}>
                {category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 175ms ease-out', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--mystic-mint)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '24px' }} aria-hidden="true" />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
            © {new Date().getFullYear()} NexusAI, Inc. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
            Built with precision. Scaled without limits.
          </p>
        </div>
      </div>
    </footer>
  );
}
