/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sserif: ["Source Serif 4", "serif"],
      },
      backgroundImage: {
        'gradient-stripes': 'linear-gradient(135deg, #e2e8f0 25%, #f8fafc 25%, #f8fafc 50%, #e2e8f0 50%, #e2e8f0 75%, #f8fafc 75%, #f8fafc)',
      },
      backgroundSize: {
        'stripe-size': '200% 200%',
      },
      animation: {
        'parallax-flash': 'parallax 1.5s linear infinite',
      },
      keyframes: {
        parallax: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
    },
  },
}

