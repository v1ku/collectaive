module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'eggplant': '#57404C',
        'platinum': '#E8E9EA',
        'white': '#FDFEFE',
        'oxford-blue': '#02012A',
        'alice-blue': '#E8F1F4',
      },
      textColor: {
        'eggplant': '#57404C',
        'platinum': '#E8E9EA',
        'white': '#FDFEFE',
        'oxford-blue': '#02012A',
        'alice-blue': '#E8F1F4',
      },
      gradientColorStops: {
        'eggplant': '#57404C',
        'platinum': '#E8E9EA',
        'white': '#FDFEFE',
        'oxford-blue': '#02012A',
        'alice-blue': '#E8F1F4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
