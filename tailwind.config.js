/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
    },
    colors: {
      barblue: '#566BF6',
      gray: '#535C83',
      light: '#EEF2F8',
      dark: '#7C86A3',
      lightblue: '#282088',
      darkblue: '#4438CA'
    }
  },
  plugins: [],
};
