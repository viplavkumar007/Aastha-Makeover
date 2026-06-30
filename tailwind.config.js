/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Derived strictly from the Aastha medallion logo
        rosegold: '#C78E82',
        'dusty-rose': '#D7A79C',
        blush: '#F4E7E3',
        champagne: '#E7C57A',
        ivory: '#FAF7F5',
        pearl: '#FFFFFF',
        bronze: '#B88652',
        mauve: '#A66B74',
        charcoal: '#2B2B2B',
        'warm-brown': '#5C4033',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serifalt: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(166, 107, 116, 0.28)',
        lift: '0 22px 50px -18px rgba(166, 107, 116, 0.40)',
        glow: '0 0 0 1px rgba(231, 197, 122, 0.45), 0 18px 45px -16px rgba(199, 142, 130, 0.55)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.55)',
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #D7A79C 0%, #C78E82 45%, #B88652 100%)',
        'rose-gloss': 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 42%), linear-gradient(135deg, #D7A79C 0%, #C78E82 48%, #B88652 100%)',
        'champagne-gradient': 'linear-gradient(135deg, #F0DAA6 0%, #E7C57A 50%, #B88652 100%)',
        'ivory-blush': 'linear-gradient(180deg, #FAF7F5 0%, #F4E7E3 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-130%)' },
          '60%, 100%': { transform: 'translateX(130%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseglow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        rise: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        pulseglow: 'pulseglow 5s ease-in-out infinite',
        rise: 'rise 0.6s ease-out both',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
