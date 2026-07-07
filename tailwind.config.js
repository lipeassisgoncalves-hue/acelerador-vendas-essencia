/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf7ef',
        porcelain: '#fffdf9',
        nude: '#d8bda7',
        blush: '#c98d86',
        cacao: '#3d3028',
        espresso: '#241a16',
        gold: '#c7a35b',
        sage: '#75806c',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(61, 48, 40, 0.12)',
        gold: '0 14px 35px rgba(199, 163, 91, 0.28)',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-texture':
          'linear-gradient(135deg, rgba(255,253,249,0.94), rgba(251,247,239,0.78)), url("https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=80")',
      },
    },
  },
  plugins: [],
}
