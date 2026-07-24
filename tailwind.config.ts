import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'warm-grey': '#f4f2ef',
        'stone-grey': '#b8b3ac',
        charcoal: '#232323',
        'near-black': '#141414',
        brass: '#b69663',
        'whatsapp-green': '#25d366',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      spacing: {
        120: '120px',
        160: '160px',
      },
    },
  },
  plugins: [],
}

export default config
