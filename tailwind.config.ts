import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0f172a', light: '#1e293b', dark: '#020617' }, // Deep Navy
        secondary: { DEFAULT: '#f97316', light: '#fb923c', dark: '#c2410c' }, // Safety Orange
        accent: { DEFAULT: '#2563eb', light: '#60a5fa', dark: '#1d4ed8' }, // Action Blue
        neutral: { DEFAULT: '#64748b', light: '#f1f5f9', dark: '#334155' },
        text: { DEFAULT: '#0f172a', light: '#475569', dark: '#020617' },
        success: { DEFAULT: '#10b981', light: '#34d399', dark: '#059669' },
        warning: { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#d97706' },
        error: { DEFAULT: '#ef4444', light: '#f87171', dark: '#dc2626' }
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
