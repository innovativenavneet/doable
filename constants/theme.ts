export const Colors = {
  background: '#0F0F12',
  backgroundAlt: '#121212',
  card: '#1C1C23',
  cardElevated: '#252530',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  primary: '#8B80F8',
  primaryLight: '#A084E8',
  primaryDark: '#6B5FD4',
  teal: '#4DB6AC',
  orange: '#FF8A65',
  pink: '#F06292',
  yellow: '#FFD54F',
  gold: '#FFB300',
  blue: '#64B5F6',
  green: '#66BB6A',
  border: '#2A2A35',
  navInactive: '#6B7280',
  progressTrack: 'rgba(255,255,255,0.25)',
  progressFill: '#FFFFFF',
  checkboxBorder: '#4B5563',
  newDot: '#8B80F8',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
} as const;

export const Typography = {
  greeting: { fontSize: 14, fontWeight: '400' as const },
  title: { fontSize: 26, fontWeight: '700' as const },
  screenTitle: { fontSize: 28, fontWeight: '700' as const },
  subtitle: { fontSize: 14, fontWeight: '400' as const },
  body: { fontSize: 15, fontWeight: '500' as const },
  bodyBold: { fontSize: 15, fontWeight: '600' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
  stat: { fontSize: 22, fontWeight: '700' as const },
  progressPercent: { fontSize: 32, fontWeight: '700' as const },
};
