/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ivoire: '#F7F1E6',
        encre: '#231A1C',
        bordeaux: '#5C1A34',
        'bordeaux-deep': '#3E1024',
        or: '#C6A15B',
        'or-clair': '#E4CFA0',
        poussiere: '#D9A9A0'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.85' }
        }
      },
      animation: {
        flicker: 'flicker 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
