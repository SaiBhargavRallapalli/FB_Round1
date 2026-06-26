'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AutomationIcon, AnalyticsIcon, AIBrainIcon, IntegrationIcon, SecurityIcon, ScalabilityIcon, ChevronIcon } from './icons';

interface Feature {
  id: number;
  title: string;
  description: string;
  detail: string;
  Icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  accent: string;
  bentoClass: string;
  tag: string;
}

const FEATURES: Feature[] = [
  {
    id: 0,
    title: 'Intelligent Pipeline Automation',
    description: 'Design end-to-end AI workflows with a visual drag-and-drop builder. Connect models, triggers, and APIs into autonomous data pipelines that self-heal on failure.',
    detail: 'Build complex multi-step pipelines with conditional branching, error handling, and automatic retries — all without writing infrastructure code.',
    Icon: AutomationIcon,
    accent: '#FFC801',
    bentoClass: 'bento-1',
    tag: 'Core',
  },
  {
    id: 1,
    title: 'Real-Time Analytics Engine',
    description: 'Monitor pipeline performance with sub-second metrics, anomaly detection, and predictive health scoring across all your workflows.',
    detail: 'Unified observability dashboard with live streaming metrics, custom alert thresholds, and AI-generated optimization suggestions.',
    Icon: AnalyticsIcon,
    accent: '#FF9932',
    bentoClass: 'bento-2',
    tag: 'Analytics',
  },
  {
    id: 2,
    title: 'Adaptive ML Model Hub',
    description: 'Fine-tune, deploy, and version-control custom models directly from the platform. A/B test models in production with zero downtime.',
    detail: 'Supports all major model architectures. Automated retraining pipelines ensure your models improve continuously with fresh production data.',
    Icon: AIBrainIcon,
    accent: '#D9E8E2',
    bentoClass: 'bento-3',
    tag: 'AI Models',
  },
  {
    id: 3,
    title: '500+ Native Integrations',
    description: 'Connect your entire tech stack instantly. From databases and CRMs to messaging platforms and custom REST APIs.',
    detail: 'Pre-built connectors with zero configuration. OAuth, API key, and webhook authentication handled automatically.',
    Icon: IntegrationIcon,
    accent: '#FFC801',
    bentoClass: 'bento-4',
    tag: 'Integrations',
  },
  {
    id: 4,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, role-based access control, and complete audit trails for every data operation.',
    detail: 'Zero-trust architecture with VPC peering, private endpoints, and bring-your-own-key (BYOK) encryption support.',
    Icon: SecurityIcon,
    accent: '#FF9932',
    bentoClass: 'bento-5',
    tag: 'Security',
  },
  {
    id: 5,
    title: 'Infinite Scale Infrastructure',
    description: 'Auto-scaling compute that handles 10x traffic spikes without configuration. Pay only for what you use with burst capacity.',
    detail: 'Distributed across 12 global regions with intelligent load balancing and 99.99% uptime SLA backed by financial guarantees.',
    Icon: ScalabilityIcon,
    accent: '#D9E8E2',
    bentoClass: 'bento-6',
    tag: 'Infrastructure',
  },
];

const MOBILE_BREAKPOINT = 768;

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const hoverIndexRef = useRef<number>(0);
  const prevMobileRef = useRef<boolean>(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const nowMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (!prevMobileRef.current && nowMobile) {
        /* Context Lock — transfer active bento hover state → accordion */
        setActiveIndex(hoverIndexRef.current);
      }
      prevMobileRef.current = nowMobile;
      setIsMobile(nowMobile);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint, { passive: true });
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  const handleBentoHover = useCallback((index: number) => {
    hoverIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const handleAccordionToggle = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section id="features" aria-labelledby="features-heading" style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Section header */}
      <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forsythia)', marginBottom: '12px', fontFamily: 'var(--font-display), monospace' }}>
          Platform Capabilities
        </p>
        <h2 id="features-heading" style={{ fontFamily: 'var(--font-display), monospace', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '16px', color: 'var(--arctic-powder)' }}>
          Everything You Need to{' '}
          <span className="gradient-text">Ship Faster</span>
        </h2>
        <p style={{ color: 'var(--mystic-mint)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
          A unified AI automation platform engineered for scale, speed, and reliability.
        </p>
      </div>

      {/* ─── Desktop: Bento Grid ─── */}
      <div className="bento-grid scroll-reveal" aria-label="Feature grid" role="list">
        {FEATURES.map((feat) => (
          <BentoCard key={feat.id} feature={feat} isActive={activeIndex === feat.id} onHover={handleBentoHover} />
        ))}
      </div>

      {/* ─── Mobile: Accordion ─── */}
      <div className="accordion-list" aria-label="Feature list" role="list" style={{ display: 'none', flexDirection: 'column', gap: '10px' }}>
        {FEATURES.map((feat) => (
          <AccordionItem key={feat.id} feature={feat} isOpen={activeIndex === feat.id} onToggle={handleAccordionToggle} />
        ))}
      </div>
    </section>
  );
}

/* ─── Bento Card ─── */
interface BentoCardProps {
  feature: Feature;
  isActive: boolean;
  onHover: (index: number) => void;
}

function BentoCard({ feature, isActive, onHover }: BentoCardProps) {
  const { Icon, accent, bentoClass, title, description, tag } = feature;

  return (
    <article
      role="listitem"
      className={`bento-card ${bentoClass} ${isActive ? 'active' : ''} scroll-reveal`}
      onMouseEnter={() => onHover(feature.id)}
      aria-label={title}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: '12px',
        background: `${accent}18`, border: `1px solid ${accent}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px', color: accent,
        transition: 'background-color 175ms ease-out',
      }}>
        <Icon size={22} />
      </div>

      <span style={{
        display: 'inline-block', fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.10em', textTransform: 'uppercase', color: accent,
        marginBottom: '8px', fontFamily: 'var(--font-display), monospace',
      }}>
        {tag}
      </span>

      <h3 style={{
        fontFamily: 'var(--font-display), monospace',
        fontSize: bentoClass === 'bento-1' ? '1.4rem' : '1.05rem',
        fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '10px',
        color: 'var(--arctic-powder)',
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: bentoClass === 'bento-1' ? '0.95rem' : '0.85rem',
        color: 'var(--mystic-mint)', lineHeight: 1.7,
        fontFamily: 'var(--font-body), system-ui, sans-serif',
      }}>
        {description}
      </p>

      {isActive && (
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          width: '8px', height: '8px', borderRadius: '50%',
          background: accent, boxShadow: `0 0 8px ${accent}`,
        }} aria-hidden="true" />
      )}
    </article>
  );
}

/* ─── Accordion Item ─── */
interface AccordionItemProps {
  feature: Feature;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

function AccordionItem({ feature, isOpen, onToggle }: AccordionItemProps) {
  const { Icon, accent, title, description, detail, tag, id } = feature;
  const contentId = `accordion-content-${id}`;
  const triggerId = `accordion-trigger-${id}`;

  return (
    <div role="listitem" className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button
        id={triggerId}
        className="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => onToggle(id)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: `${accent}15`, border: `1px solid ${accent}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: accent, flexShrink: 0,
          }}>
            <Icon size={18} />
          </div>
          <div>
            <span style={{
              display: 'block', fontSize: '0.62rem', fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase', color: accent,
              marginBottom: '2px', fontFamily: 'var(--font-display), monospace',
            }}>
              {tag}
            </span>
            <span style={{ fontFamily: 'var(--font-display), monospace', fontSize: '0.95rem', fontWeight: 600, color: 'var(--arctic-powder)' }}>
              {title}
            </span>
          </div>
        </div>
        <ChevronIcon />
      </button>

      <div id={contentId} className="accordion-content" role="region" aria-labelledby={triggerId}>
        <div className="accordion-inner">
          <p style={{ color: 'var(--mystic-mint)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '12px', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
            {description}
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.65, fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}
