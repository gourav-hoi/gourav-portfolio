import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}', './three/**/*.{ts,tsx}', './utils/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))', border: 'hsl(var(--border))', primary: 'hsl(var(--primary))', secondary: 'hsl(var(--secondary))', accent: 'hsl(var(--accent))', muted: 'hsl(var(--muted))', card: 'hsl(var(--card))' },
      fontFamily: { sans: ['var(--font-sans)', 'system-ui', 'sans-serif'], display: ['var(--font-display)', 'system-ui', 'sans-serif'] },
      backgroundImage: { 'hero-grid': 'radial-gradient(circle at top, rgba(83,252,248,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(173,98,255,0.14), transparent 30%), linear-gradient(180deg, rgba(6,7,12,0.75) 0%, rgba(4,6,14,0.95) 100%)' },
      boxShadow: { glow: '0 0 0 1px rgba(83,252,248,0.15), 0 0 32px rgba(83,252,248,0.18)', neon: '0 12px 60px rgba(83,252,248,0.18)' },
      animation: { float: 'float 6s ease-in-out infinite', pulseGlow: 'pulseGlow 4s ease-in-out infinite', marquee: 'marquee 18s linear infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } }, pulseGlow: { '0%, 100%': { opacity: '0.6', filter: 'blur(42px)' }, '50%': { opacity: '1', filter: 'blur(58px)' } }, marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } },
    },
  },
  plugins: [],
};

export default config;
