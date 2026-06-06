/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial minimal — warm monochrome
        paper: '#FFFFFF',
        canvas: '#F4F3EF', // warm off-white for alternating sections
        ink: '#171716', // near-black text
        muted: '#6B6760', // warm grey (AA on white)
        line: '#E6E3DC', // warm hairline
        dark: '#121110', // near-black surfaces (banner/footer)
        spark: '#10B981', // tiny "available" dot only
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '78rem',
      },
      letterSpacing: {
        label: '0.2em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
