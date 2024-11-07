/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures that Tailwind scans all JS and TS files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        SAGEGREEN: '#9DBAAE',
        LIGHTGREY: '#F4F4F4',
        SILVERGREY:'#D3D9DF',
        PALEBLUE:'#E0E8F0'
      },
    },
  },
  plugins: [],
};
