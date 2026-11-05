/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0D6EFD',
          ink: '#10131A',
          graphite: '#2A2F3A',
          mist: '#F4F7FB'
        }
      },
      boxShadow: {
        glow: '0 24px 80px rgba(13, 110, 253, 0.22)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
