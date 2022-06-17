module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  variants: {},
  theme: {
    extend: {
      content: {},
      typography: {
        DEFAULT: {
          css: {
            /* for highlight.js
            "pre code": {
              padding: 0,
            },
            */
            //Remove `` around inline code block
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  darkMode: false,
  plugins: [require("@tailwindcss/typography")],
};
