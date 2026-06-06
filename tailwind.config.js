/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Trust & Authority palette (ui-ux-pro-max design system)
        ink: '#09090B', // primary text
        primary: '#18181B', // headings / dark UI
        muted: '#3F3F46', // secondary text
        accent: {
          DEFAULT: '#2563EB', // CTA blue
          hover: '#1D4ED8',
          soft: '#EFF4FF',
        },
        canvas: '#FAFAFA', // page background
        surface: '#FFFFFF', // cards
        hairline: '#E4E4E7', // borders
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '76rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(9, 9, 11, 0.04), 0 12px 32px -12px rgba(9, 9, 11, 0.10)',
        'card-hover': '0 2px 4px rgba(9, 9, 11, 0.06), 0 24px 48px -16px rgba(37, 99, 235, 0.22)',
        cta: '0 8px 24px -8px rgba(37, 99, 235, 0.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
