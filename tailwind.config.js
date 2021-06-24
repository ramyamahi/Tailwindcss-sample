module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.jsx", ""],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#87CEFA",
          DEFAULT: "#87CEEB",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
