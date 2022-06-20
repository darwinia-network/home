const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FF0083",
      black: "#000000",
      gray: "#C6C6C6",
      white: "#FFFFFF",
      halfWhite: "rgba(255, 255, 255, 0.5)",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("3n", "&:nth-child(3n)");
      addVariant("3n-2", "&:nth-child(3n-2)");
    }),
  ],
};
