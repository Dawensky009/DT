/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Aeonik-template palette (neo-grotesk, neutral greys)
        paper: '#FFFFFF',
        canvas: '#F8F8F8', // tertiary — page background
        ink: '#222222', // primary text
        muted: '#7B7B7B', // secondary text
        line: '#E4E4E4', // hairline
        dark: '#1A1A1A', // dark surfaces (banner/footer)
        spark: '#10B981', // small accent dot
      },
      fontFamily: {
        // One neo-grotesk family across the whole site (like the reference)
        display: ['"General Sans"', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '88rem',
      },
      letterSpacing: {
        label: '0.2em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scroll-bounce': 'scroll-bounce 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
