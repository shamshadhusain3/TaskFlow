const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '0px 0px 91px 26px rgba(46, 182, 255, 0.65)' // Custom shadow value
      },
      backgroundPosition: {
        'center-center': 'center center',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #06b6d4, #3b82f6)',
        'blue-gradient-2': 'linear-gradient(to right, #3b82f6,#06b6d4)',

        'light-blue-gradient': 'linear-gradient(to right, #3c83f6c0, #06b5d470)'
      },
      borderColor: {
        'b-blue-gradient': 'linear-gradient(to right, #06b6d4, #3b82f6)',
      },
      
      
     
    },
    // rest of the code
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
