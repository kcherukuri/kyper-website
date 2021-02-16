module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DIN Alternate']
      },
      colors: {
        background: '#F8F9FB',
        backgroundDark: '#000000',
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'gradient': 'linear-gradient(135deg, #B4D6F8 0%, #317AC7 52.08%, #1D264D 100%)',
      }),
      scale: {
        '20': '0.20',
      },
      maxWidth: {
        '1/10': '10%',
        '1/6': '16.67%',
        'deviceheight': '421px',
        'devicewidth': '232.77px',
       },
      spacing: {
        'deviceheight': '421px',
        'devicewidth': '232.77px',
        '64': '15rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
