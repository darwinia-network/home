module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "table-bg": "#222020",
        "app-white": "#F2F3F5",
        "app-inner-white": "#EAF0F6",
        "app-gray": "#6F6F6F",
        "app-black": "#000000",
        "app-inner-black": "#2A2A2A",
        "app-main": "#FF0083",
        "app-line": "#000000",
        "app-link": "#FF0083",
      },
      spacing: {
        small: "0.3125rem", // 5px
        medium: "0.625rem", // 10
        large: "1.25rem", // 20
      },
      maxWidth: {
        "8xl": "90rem",
      },
      screen : {
        "4xl" : "1920px" ,
        "5xl" : "2560px"
      }
    },
  },
};
