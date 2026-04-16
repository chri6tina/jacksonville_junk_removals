import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6b46c1', light: '#8b5cf6', dark: '#553c9a' },
        secondary: { DEFAULT: '#f8fafc', light: '#ffffff', dark: '#e2e8f0' },
        accent: { DEFAULT: '#a855f7', light: '#c084fc', dark: '#9333ea' },
        neutral: { DEFAULT: '#64748b', light: '#94a3b8', dark: '#475569' },
        text: { DEFAULT: '#1e293b', light: '#475569', dark: '#0f172a' },
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
