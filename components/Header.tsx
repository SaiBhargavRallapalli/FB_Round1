'use client';

import { useState, useEffect } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './icons';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Blog', href: '#blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background-color 175ms ease-out, border-color 175ms ease-out, backdrop-filter 175ms ease-out',
        backgroundColor: scrolled ? 'rgba(23, 43, 54, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <a href="/" aria-label="NexusAI — Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <LogoIcon size={32} />
            <span style={{
              fontFamily: 'var(--font-display), monospace',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: 'var(--arctic-powder)',
              letterSpacing: '-0.01em',
            }}>
              Nexus<span style={{ color: 'var(--forsythia)' }}>AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', gap: '32px' }} className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  color: 'var(--mystic-mint)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 175ms ease-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--arctic-powder)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mystic-mint)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="hidden md:flex">
            <a href="#pricing" className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>Log In</a>
            <a href="#pricing" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>Start Free Trial</a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--arctic-powder)', padding: '4px' }}
            className="flex md:hidden"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{ maxHeight: mobileOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 350ms ease-in-out' }}>
          <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingBottom: '20px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid var(--color-border)',
                  fontSize: '1rem',
                  color: 'var(--mystic-mint)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#pricing" className="btn-primary" style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => setMobileOpen(false)}>
              Start Free Trial
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
