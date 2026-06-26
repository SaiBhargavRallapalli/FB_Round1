'use client';

import type React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

/* ── Provided SVG assets (paths extracted from assests/SVGs/) ── */

export function LogoIcon({ className = '', size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      {/* Cube-inspired logo using cube-16-solid path, scaled to 32x32 */}
      <g transform="translate(6, 6) scale(1.25)">
        <path
          fill="white"
          d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"
          opacity="0.95"
        />
      </g>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#114C5A" />
          <stop offset="1" stopColor="#172B36" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Provided: cog-8-tooth.svg — used for Automation feature */
export function AutomationIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
      </g>
    </svg>
  );
}

/* Provided: arrow-trending-up.svg — used for Analytics feature */
export function AnalyticsIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
    </svg>
  );
}

/* Provided: chart-pie.svg — used for AI/ML feature */
export function AIBrainIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
      </g>
    </svg>
  );
}

/* Provided: link-solid.svg — used for Integration feature */
export function IntegrationIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd"/>
    </svg>
  );
}

/* Provided: arrow-path.svg — used for Security (cycle/refresh = continuous protection) */
export function SecurityIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
    </svg>
  );
}

/* Provided: cube-16-solid.svg — used for Scalability/Infrastructure */
export function ScalabilityIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="currentColor" d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
    </svg>
  );
}

export function DataFlowIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
    </svg>
  );
}

export function CheckIcon({ className = '', size = 16, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.15" />
      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Provided: chevron-down.svg */
export function ChevronIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`accordion-chevron ${className}`} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = '', size = 16, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
    </svg>
  );
}

/* Provided: x-mark.svg */
export function MenuIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* Provided: x-mark.svg */
export function CloseIcon({ className = '', size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  );
}

/* Provided: search.svg */
export function SparklesIcon({ className = '', size = 20, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <circle cx="16" cy="4" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="4" cy="16" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function StarIcon({ className = '', size = 16, filled = false, style }: IconProps & { filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M8 1.5L9.6 6H14.5L10.5 8.9L12 13.5L8 10.8L4 13.5L5.5 8.9L1.5 6H6.4L8 1.5Z" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ className = '', size = 32, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M6 22C6 18.134 9.134 15 13 15V11C6.925 11 2 15.925 2 22V28H8V22H6Z" fill="currentColor" opacity="0.3" />
      <path d="M18 22C18 18.134 21.134 15 25 15V11C18.925 11 14 15.925 14 22V28H20V22H18Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
