module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegreen: '#75E6DA',
        bluegrotto: '#189AB4',
        bluenavy: '#05445E',
        baby: {
          pure: '#D4F1F4',
          50: '#EFFAFB',
          100: '#def5f7',
          200: '#bdebef',
          300: '#9ce1e7',
          400: '#7cd7df',
          500: '#5bcdd7',
          600: '#3ac3cf',
          700: '#2ca9b5',
          800: '#248a94',
          900: '#1c6c73'
        }
      },
      fontFamily: {
        'xanh': ['Xanh Mono', 'monospace']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
