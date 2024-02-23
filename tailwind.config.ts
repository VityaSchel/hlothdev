const config: import('tailwindcss').Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-container': 'box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2)',
        'card-avatar': 'inset -2px -2px 8px 0 rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

export default config