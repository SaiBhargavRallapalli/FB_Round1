'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import {
  PRICING_MATRIX, CURRENCY_MATRIX, computePrice, computeAnnualSavings,
  type BillingCycle, type Currency, type TierKey,
} from '@/lib/pricingMatrix';
import { pricingStore, setBilling, setCurrency, PRICING_UPDATE_EVENT } from '@/lib/pricingState';
import { CheckIcon, ArrowRightIcon } from './icons';

/* ─── BillingToggle — isolated; only re-renders this component ─── */
const BillingToggle = memo(function BillingToggle() {
  const [billing, setBillingUI] = useState<BillingCycle>('monthly');

  const handleClick = useCallback((val: BillingCycle) => {
    setBillingUI(val);
    setBilling(val);
  }, []);

  return (
    <div role="group" aria-label="Billing cycle" style={{ display: 'inline-flex', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '4px', gap: '4px' }}>
      {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => (
        <button
          key={cycle}
          aria-pressed={billing === cycle}
          onClick={() => handleClick(cycle)}
          className="billing-tab"
          style={{
            padding: '8px 20px', borderRadius: '7px', border: 'none', cursor: 'pointer',
            fontSize: '0.875rem', fontWeight: 600,
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            background: billing === cycle ? 'linear-gradient(135deg, var(--forsythia), var(--deep-saffron))' : 'transparent',
            color: billing === cycle ? 'var(--oceanic-noir)' : 'var(--mystic-mint)',
            transition: 'background 175ms ease-out, color 175ms ease-out',
          }}
        >
          {cycle === 'monthly' ? 'Monthly' : 'Annual'}
          {cycle === 'annual' && (
            <span style={{
              marginLeft: '8px',
              background: billing === 'annual' ? 'rgba(23,43,54,0.25)' : 'rgba(255,200,1,0.15)',
              color: billing === 'annual' ? 'var(--oceanic-noir)' : 'var(--forsythia)',
              padding: '2px 8px', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700,
            }}>
              −20%
            </span>
          )}
        </button>
      ))}
    </div>
  );
});

/* ─── CurrencySelector — isolated; only re-renders this component ─── */
const CurrencySelector = memo(function CurrencySelector() {
  const [currency, setCurrencyUI] = useState<Currency>('USD');

  const handleSelect = useCallback((cur: Currency) => {
    setCurrencyUI(cur);
    setCurrency(cur);
  }, []);

  return (
    <div role="group" aria-label="Currency selection" style={{ display: 'flex', gap: '8px' }}>
      {(Object.keys(CURRENCY_MATRIX) as Currency[]).map((cur) => {
        const { symbol } = CURRENCY_MATRIX[cur];
        const isActive = currency === cur;
        return (
          <button
            key={cur}
            aria-pressed={isActive}
            onClick={() => handleSelect(cur)}
            className="currency-btn"
            style={{
              padding: '7px 14px', borderRadius: '8px', cursor: 'pointer',
              border: `1px solid ${isActive ? 'var(--forsythia)' : 'var(--color-border)'}`,
              background: isActive ? 'rgba(255,200,1,0.12)' : 'transparent',
              color: isActive ? 'var(--forsythia)' : 'var(--mystic-mint)',
              fontSize: '0.8rem', fontWeight: 600,
              fontFamily: 'var(--font-display), monospace',
            }}
          >
            {symbol} {cur}
          </button>
        );
      })}
    </div>
  );
});

/* ─── PriceNode — subscribes to CustomEvent; NEVER re-renders from parent ─── */
const PriceNode = memo(function PriceNode({ tierKey }: { tierKey: TierKey }) {
  const amountRef = useRef<HTMLSpanElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);
  const savingsRef = useRef<HTMLSpanElement>(null);

  const update = useCallback((billing: BillingCycle, currency: Currency) => {
    const { formatted } = computePrice(tierKey, currency, billing);
    const savings = computeAnnualSavings(tierKey, currency);

    if (amountRef.current) {
      amountRef.current.classList.remove('price-updating');
      void amountRef.current.offsetWidth;
      amountRef.current.classList.add('price-updating');
      amountRef.current.textContent = formatted;
    }
    if (periodRef.current) {
      periodRef.current.textContent = billing === 'annual' ? '/ yr' : '/ mo';
    }
    if (savingsRef.current) {
      savingsRef.current.textContent = billing === 'annual' ? `Save ${savings}/yr` : '';
      savingsRef.current.style.opacity = billing === 'annual' ? '1' : '0';
    }
  }, [tierKey]);

  useEffect(() => {
    const handler = (e: Event) => {
      const { billing, currency } = (e as CustomEvent).detail;
      update(billing, currency);
    };
    window.addEventListener(PRICING_UPDATE_EVENT, handler);
    return () => window.removeEventListener(PRICING_UPDATE_EVENT, handler);
  }, [update]);

  const init = computePrice(tierKey, pricingStore.currency, pricingStore.billing);

  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span
          ref={amountRef}
          className="price-value"
          aria-live="polite"
          aria-atomic="true"
          style={{
            fontFamily: 'var(--font-display), monospace',
            fontSize: '2.4rem', fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--forsythia)',
          }}
        >
          {init.formatted}
        </span>
        <span ref={periodRef} style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 400, fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
          / mo
        </span>
      </div>
      <span
        ref={savingsRef}
        style={{
          fontSize: '0.78rem', color: 'var(--deep-saffron)', fontWeight: 600,
          opacity: 0, transition: 'opacity 175ms ease-out',
          display: 'block', height: '18px',
          fontFamily: 'var(--font-body), system-ui, sans-serif',
        }}
      />
    </div>
  );
});

/* ─── PricingCard — never re-renders from billing/currency changes ─── */
const PricingCard = memo(function PricingCard({ tierKey }: { tierKey: TierKey }) {
  const tier = PRICING_MATRIX[tierKey];

  return (
    <article className={`pricing-card ${tier.popular ? 'popular' : ''} scroll-reveal`} aria-label={`${tier.name} pricing plan`}>
      {tier.popular && (
        <div className="pricing-badge" aria-label="Most popular plan">Most Popular</div>
      )}

      <header style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display), monospace', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: tier.popular ? 'var(--forsythia)' : 'var(--arctic-powder)' }}>
          {tier.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--mystic-mint)', lineHeight: 1.65, fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
          {tier.description}
        </p>
      </header>

      {/* Price — updated via direct DOM; this component never re-renders */}
      <PriceNode tierKey={tierKey} />

      <div style={{ height: '1px', background: 'var(--color-border)', margin: '24px 0' }} aria-hidden="true" />

      <ul style={{ listStyle: 'none', marginBottom: '28px' }} aria-label={`${tier.name} features`}>
        {tier.features.map((feat) => (
          <li key={feat} className="feature-check">
            <CheckIcon size={16} style={{ color: tier.popular ? 'var(--forsythia)' : 'var(--deep-saffron)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.875rem', color: 'var(--mystic-mint)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={tier.popular ? 'btn-primary' : 'btn-outline'}
        style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
        aria-label={`${tier.cta} — ${tier.name} plan`}
      >
        {tier.cta}
        <ArrowRightIcon size={14} style={{ marginLeft: '6px' }} />
      </a>
    </article>
  );
});

/* ─── Section wrapper — never re-renders on pricing changes ─── */
export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: '96px 24px', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forsythia)', marginBottom: '12px', fontFamily: 'var(--font-display), monospace' }}>
            Transparent Pricing
          </p>
          <h2 id="pricing-heading" style={{ fontFamily: 'var(--font-display), monospace', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '16px', color: 'var(--arctic-powder)' }}>
            Scale Without{' '}
            <span className="gradient-text">Surprises</span>
          </h2>
          <p style={{ color: 'var(--mystic-mint)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
            Predictable pricing that grows with your team. No hidden fees, no vendor lock-in.
          </p>
        </div>

        {/* Controls — each component is fully isolated */}
        <div className="scroll-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'center', marginBottom: '48px' }}>
          <BillingToggle />
          <CurrencySelector />
        </div>

        {/* Cards — never re-render on billing/currency changes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {(Object.keys(PRICING_MATRIX) as TierKey[]).map((tierKey) => (
            <PricingCard key={tierKey} tierKey={tierKey} />
          ))}
        </div>

        <p className="scroll-reveal" style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.82rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
          All plans include a 14-day free trial. No credit card required. Annual plans billed upfront with a 20% discount applied.
        </p>
      </div>
    </section>
  );
}
