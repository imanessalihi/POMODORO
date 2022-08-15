/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pomodoro":"#D95550",
        "darkRed": "#bd5a56",
        "pomoblue": "#4C9195",
        "blueButton":"#468589",
        "pomoDarkBlue": "#5889AC",
        "darkBlueButton": "#3F7296",
      }
    },
  },
  plugins: [],
}
