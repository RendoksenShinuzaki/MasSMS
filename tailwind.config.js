/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    lineHeight: {
      'loose' : '5rem',
      'extraloose' : '10rem',
    },

    fontSize: {
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '30px',
      'xxl': '2rem',
      'xxxl' : '3rem',
      'xxxxl' : '4rem',
    },

    fontWeight:{
      'ultrabold':'1000',
    },

    extend: {

      textColor:{
        'Semi-Purple' : '#2A1844',
        'Semi-Blue': '#D1E8F9',
        'Light-Blue': '#49aae7', 
        'Dark-Blue': '#00adee',
      },

      backgroundColor:{
        'Fade-yellow' : '#FDE764',
        
      },

      height:{
        'extrasmall':'20rem',
        'small' : '29.15rem',
        'medium': '35rem',
        'large': '40rem', 
        'extralarge': '50rem', 
      },

      width:{
        'extrasmall':'20rem',
        'small' : '25rem',
        'medium' : '30rem',
        'large' : '40rem',
        'extralarge' : '50rem',
        'superlarge': '54rem',
      },  

      margin: {
        auto: 'auto',
        '-9': '-6.4rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '25': '8.8rem',
        '26': '9rem',
        '28': '10rem',
        '32': '31.3rem',
        '40': '25rem',
        '48': '30rem',
        '56': '35rem',
        '64': '38rem',
        '65': '45rem',
        '66': '50rem',
        '70': '56rem',
        '71': '65rem',
      },

      

    },
  },
  plugins: [],
}

