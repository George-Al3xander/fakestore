export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          500: "#17AF26",
          700: "#05422C"
        },
        "secondary": "#68ceb6",
        "accent": 'white'
        
      },
      fontFamily: {
        "default": "'Nunito Sans', sans-serif"
      },
      width: {
        "responsive": "min(90%,70rem)"
      }
    },
  },
  plugins: [],
}