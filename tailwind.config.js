/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: { // THIS IS CUSTOM CONTAINER CLASS 
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "80rem",
        },
      },
      backgroundImage: { // THESE ARE CUSTOM BG GRADIENTS 
        "l-g-b":
          "linear-gradient(to bottom, rgba(243, 244, 246, 0.9), rgba(249, 250, 251, 0.8))",
        "l-g-t": "linear-gradient(to top, #f9fafb, #f3f4f6)",
        "d-g-b":
          "linear-gradient(to bottom, rgba(3, 7, 18, 0.9), rgba(17, 24, 39, 0.8))",
        "d-g-t": "linear-gradient(to top, #111827,#030712)",
      },
    },
  },
  plugins: [],
};
