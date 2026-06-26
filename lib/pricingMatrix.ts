export type BillingCycle = 'monthly' | 'annual';
export type Currency = 'USD' | 'INR' | 'EUR';
export type TierKey = 'starter' | 'pro' | 'enterprise';

export interface TierConfig {
  name: string;
  description: string;
  baseUSD: number;
  cta: string;
  popular?: boolean;
  features: string[];
}

export interface CurrencyConfig {
  symbol: string;
  code: Currency;
  tariff: number;
  locale: string;
}

/* Multi-dimensional pricing matrix */
export const PRICING_MATRIX: Record<TierKey, TierConfig> = {
  starter: {
    name: 'Starter',
    description: 'Perfect for solo builders and small teams exploring AI automation.',
    baseUSD: 29,
    cta: 'Get Started',
    features: [
      '5 AI automation pipelines',
      '10,000 API calls / month',
      'Basic analytics dashboard',
      'CSV & JSON data connectors',
      'Email support',
      '99.5% uptime SLA',
    ],
  },
  pro: {
    name: 'Pro',
    description: 'For growing teams that need advanced workflows and integrations.',
    baseUSD: 79,
    cta: 'Start Free Trial',
    popular: true,
    features: [
      'Unlimited AI pipelines',
      '500,000 API calls / month',
      'Real-time analytics & alerts',
      '50+ data connectors',
      'Priority support (< 4hr SLA)',
      'Custom model fine-tuning',
      'Team collaboration (10 seats)',
      '99.9% uptime SLA',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    description: 'Mission-critical infrastructure with dedicated support and compliance.',
    baseUSD: 199,
    cta: 'Contact Sales',
    features: [
      'Unlimited everything',
      'Unlimited API calls',
      'Advanced ML model hub',
      'Custom data connectors',
      'Dedicated account manager',
      'SOC 2 Type II compliance',
      'SSO / SAML integration',
      'Custom SLA (99.99%)',
      'On-premise deployment option',
    ],
  },
};

/* Currency config with regional tariff variables */
export const CURRENCY_MATRIX: Record<Currency, CurrencyConfig> = {
  USD: { symbol: '$', code: 'USD', tariff: 1.0,   locale: 'en-US' },
  INR: { symbol: '₹', code: 'INR', tariff: 83.5,  locale: 'en-IN' },
  EUR: { symbol: '€', code: 'EUR', tariff: 0.92,  locale: 'de-DE' },
};

const ANNUAL_DISCOUNT_MULTIPLIER = 0.80; // 20% off

export function computePrice(
  tierKey: TierKey,
  currency: Currency,
  billing: BillingCycle
): { amount: number; formatted: string; symbol: string; monthlyEquivalent: string } {
  const tier = PRICING_MATRIX[tierKey];
  const cur = CURRENCY_MATRIX[currency];

  const monthly = Math.round(tier.baseUSD * cur.tariff);
  const discounted = Math.round(monthly * ANNUAL_DISCOUNT_MULTIPLIER);
  const amount = billing === 'annual' ? discounted : monthly;

  const fmt = (n: number) => {
    if (currency === 'INR') return `${cur.symbol}${n.toLocaleString('en-IN')}`;
    return `${cur.symbol}${n.toLocaleString('en-US')}`;
  };

  return {
    amount,
    formatted: fmt(amount),
    symbol: cur.symbol,
    monthlyEquivalent: billing === 'annual' ? fmt(Math.round(discounted / 12)) : fmt(monthly),
  };
}

export function computeAnnualSavings(tierKey: TierKey, currency: Currency): string {
  const tier = PRICING_MATRIX[tierKey];
  const cur = CURRENCY_MATRIX[currency];
  const monthly = Math.round(tier.baseUSD * cur.tariff);
  const savings = Math.round(monthly * 12 * 0.20);
  if (currency === 'INR') return `₹${savings.toLocaleString('en-IN')}`;
  return `${cur.symbol}${savings.toLocaleString('en-US')}`;
}
