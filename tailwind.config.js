export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          cream: '#FAF7F2',
          beige: '#F5F0E8',
          light: '#E8E2D9',
          gold: '#D4AF73',
          'gold-light': '#E8D9C5',
          charcoal: '#2C2C2C',
          grey: '#8A8A8A',
          'grey-light': '#D9D9D9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
