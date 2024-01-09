const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0083",
        black: "#000000",
        gray: "#C6C6C6",
        white: "#FFFFFF",
        halfWhite: "rgba(255, 255, 255, 0.5)",
        "table-bg": "#222020",
      },
      spacing: {
        small: "0.3125rem", // 5px
        medium: "0.625rem", // 10
        large: "1.25rem", // 20
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("3n", "&:nth-child(3n)");
      addVariant("3n-2", "&:nth-child(3n-2)");
      addVariant("4n-3", "&:nth-child(4n-3)");
      addVariant("4n", "&:nth-child(4n)");
      addVariant("first-item", "&:nth-child(1)");
      addVariant("second-item", "&:nth-child(2)");
      addVariant("third-item", "&:nth-child(3)");
    }),
  ],
};
