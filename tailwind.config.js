/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        walton: {
          canvas: "#FAF8F4",
          card: "#FFFFFF",
          ink: "#1B1C1D",
          muted: "#54565A",
          subtle: "#8A8C8E",
          border: "#DAD8CE",
          "border-subtle": "#E8E6DD",
          primary: "#0D6199",
          amber: "#D9A345",
          teal: "#1C8B82",
          sage: "#5F8763",
          terracotta: "#C85A32",
          yellow: "#E7E72B",
          tedx: "#EB0028",
        },
      },
      fontFamily: {
        editorial: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["'Open Sans'", "sans-serif"],
      },
      boxShadow: {
        pill: "0 2px 8px -2px rgba(27, 28, 29, 0.08), 0 1px 4px -1px rgba(27, 28, 29, 0.04)",
        drawer: "-8px 0 24px -4px rgba(27, 28, 29, 0.12)",
      },
    },
  },
  plugins: [],
};
