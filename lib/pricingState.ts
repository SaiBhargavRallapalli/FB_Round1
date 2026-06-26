import type { BillingCycle, Currency } from './pricingMatrix';

/* Module-level store — zero React overhead.
   Price card DOM nodes subscribe via CustomEvent; no component re-renders. */
export const pricingStore = {
  billing: 'monthly' as BillingCycle,
  currency: 'USD' as Currency,
};

export const PRICING_UPDATE_EVENT = 'nexus:pricing-update';

export function setBilling(billing: BillingCycle): void {
  pricingStore.billing = billing;
  dispatchPricingUpdate();
}

export function setCurrency(currency: Currency): void {
  pricingStore.currency = currency;
  dispatchPricingUpdate();
}

function dispatchPricingUpdate(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(PRICING_UPDATE_EVENT, {
      detail: { billing: pricingStore.billing, currency: pricingStore.currency },
    })
  );
}
