/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      keyframes: {
        scroll : {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)'}
        },
        colorFade: {
          '0%': { color: '#ECE8D9' },
          '100%': { color: '#D68A62' }
        },
        oneBounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        colorFade: 'colorFade 0.3s ease-in-out',
        oneBounce: 'bounce 1s'
      },
      colors: {
        'default-bg': '#2E3440',
        'default-text': '#ECE8D9',
        'accent': '#A3B18A',
        'second-accent': '#D68A62',
        'highlight': '#FFDFC9'
      },
      fontFamily: {
        title: ['Outfit']
      },
    },
  },
  plugins: [],
}

