/**
 * Concierto Design Tokens
 * Based on COSMOQ Theme (cosmoq.framer.website)
 * Reference: /design-tokens.md
 * Used across all components for consistency.
 */

export const colors = {
  // Base / Background
  baseBlack: '#000000',
  bgPrimary: '#05050A',
  bgSecondary: '#0C0C14',
  bgElevated: '#111120',
  bgCard: 'rgba(255, 255, 255, 0.03)',
  bgCardHover: 'rgba(255, 255, 255, 0.055)',
  bgOverlay: 'rgba(5, 5, 10, 0.85)',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.7)',
  textMuted: 'rgba(255,255,255,0.45)',
  textFaint: 'rgba(255,255,255,0.25)',
  textDisabled: 'rgba(255,255,255,0.15)',

  // Amber accent
  amber400: '#FBBF24',
  amber500: '#F59E0B',
  amber600: '#D97706',
  amberGlow: 'rgba(245, 158, 11, 0.35)',
  amberGlowSm: 'rgba(245, 158, 11, 0.15)',

  // Blue accent
  blue400: '#38BDF8',
  blue500: '#0EA5E9',
  blueGlow: 'rgba(56, 189, 248, 0.25)',
  blueGlowSm: 'rgba(56, 189, 248, 0.12)',

  // Indigo
  indigo400: '#818CF8',
  indigo500: '#6366F1',
  indigoGlow: 'rgba(99, 102, 241, 0.2)',

  // Borders
  borderFaint: 'rgba(255, 255, 255, 0.06)',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',
  borderDefault: 'rgba(255, 255, 255, 0.12)',
  borderHover: 'rgba(255, 255, 255, 0.18)',
  borderActive: 'rgba(255, 255, 255, 0.28)',
  borderAmber: 'rgba(245, 158, 11, 0.3)',
  borderBlue: 'rgba(56, 189, 248, 0.25)',

  // 5M Pillar colors
  modernize: '#F59E0B',
  migrate: '#4ADE80',
  manage: '#38BDF8',
  maximize: '#C084FC',
  intelligence: '#818CF8',
};

export const fonts = {
  heading: "'Syne', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const radius = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '20px',
  '2xl': '28px',
  full: '9999px',
};

export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '600ms',
  slower: '800ms',
  slowest: '1200ms',
};

export const easing = {
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

// Light theme overrides
export const lightColors = {
  bgPrimary: '#F8F8FC',
  bgSecondary: '#EEEEF6',
  bgElevated: '#E4E4F0',
  bgCard: 'rgba(0, 0, 0, 0.03)',
  bgCardHover: 'rgba(0, 0, 0, 0.055)',
  bgOverlay: 'rgba(248, 248, 252, 0.9)',
  textPrimary: '#0A0A14',
  textSecondary: 'rgba(10,10,20,0.7)',
  textMuted: 'rgba(10,10,20,0.45)',
  textFaint: 'rgba(10,10,20,0.25)',
  borderFaint: 'rgba(0, 0, 0, 0.06)',
  borderSubtle: 'rgba(0, 0, 0, 0.08)',
  borderDefault: 'rgba(0, 0, 0, 0.12)',
  borderHover: 'rgba(0, 0, 0, 0.18)',
};
