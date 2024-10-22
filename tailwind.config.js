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
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          }
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        colorFade: 'colorFade 0.2s',
        oneBounce: 'oneBounce 0.3s',
        typewriter: 'typewriter 1s steps(11) forwards',
        caret: 'typewriter 1s steps(11) forwards, blink 1s steps(9) infinite 1s',
      },
      colors: {
        'default-bg': '#2E3440',
        'default-text': '#ECE8D9',
        'accent': '#A3B18A',
        'second-accent': '#D68A62',
        'highlight': '#FFDFC9',
        'shadow-text': '#B0A898'
      },
      fontFamily: {
        title: ['Outfit']
      },
    },
  },
  plugins: [],
}

