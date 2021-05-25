module.exports = {
  purge: [
    "./pages/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      base: "Roboto Mono, monospace",
    },
    colors: {
      gray: {
        900: "#0E1013",
        800: "#27272A",
        700: "#3F3F46",
        600: "#52525B",
        200: "#A1A1AA",
      },
      graphql: { light: "#E535AB", dark: "#DC2DA2" },
      transparent: "transparent",
      white: "#FFFFFF",
    },
    extend: {
      minWidth: {
        "500px": "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
