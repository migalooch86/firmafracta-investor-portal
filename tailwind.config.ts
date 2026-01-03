import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          hover: '#0052A3',
          active: '#004080',
        },
        success: {
          DEFAULT: '#00A86B',
          hover: '#008C59',
        },
        warning: {
          DEFAULT: '#FFB020',
          hover: '#E69500',
        },
        error: {
          DEFAULT: '#E63946',
          hover: '#CC2936',
        },
        neutral: {
          900: '#1A1A1A',
          600: '#6B6B6B',
          300: '#D1D1D1',
          100: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Roboto Mono', 'Monaco', 'Courier', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
    },
  },
  plugins: [],
}
export default config
