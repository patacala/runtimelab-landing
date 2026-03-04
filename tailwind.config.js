/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#10151C',
        card: '#141B24',
        accent: '#2563EB',
        'accent-light': '#3B82F6',
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        muted: '#64748B',
        line: '#1E293B',
        critical: '#EF4444',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.75rem, 5.5vw, 5.5rem)',
        'massive': 'clamp(5rem, 14vw, 10rem)',
      },
      lineHeight: {
        tight: '0.88',
      },
      letterSpacing: {
        tight: '-0.03em',
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'blueprint': '48px 48px',
      },
      animation: {
        'float-1': 'float1 7s ease-in-out infinite',
        'float-2': 'float2 9s ease-in-out infinite',
        'float-3': 'float3 8s ease-in-out infinite',
        'float-4': 'float4 10s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.8)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
