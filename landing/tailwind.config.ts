import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Landing design tokens
        ink:        '#0a0a0a',
        'ink-2':    '#6b6b6b',
        'ink-3':    '#a3a3a3',
        canvas:     '#ffffff',
        'canvas-2': '#f7f7f5',
        'canvas-3': '#f0f0ec',
        edge:       '#e8e8e4',
        'edge-2':   '#d4d4d0',
        // Review flow (keep for backward compat)
        surface:    '#0d0d0d',
        'surface-2':'#1a1a1a',
        'surface-3':'#262626',
        gold:       '#f5c842',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        float:  'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
