/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
    },
    extend: {
      colors: {
        sidebar: "#1E1E1E",
        // sidebar: "#F6F3EF",
        sidebarHighlight: "#F6F3EF",
        // sidebarHighlight: "#1E1E1E",
        sidebarHighlightText: "#1E1E1E",
        // sidebarHighlightText: "#1E1E1E",
        accent: "#FFFFFF",
        // accent: "#1E1E1E",
        // headerGray: "#1E1E1E",
        headerGray: "#F6F3EF",
      },
      // colors: {
      //   // sidebar: "#1E1E1E",
      //   sidebar: "#F6F3EF",
      //   // sidebarHighlight: "#ECF0F1",
      //   sidebarHighlight: "#1E1E1E",
      //   // sidebarHighlightText: "#1E1E1E",
      //   sidebarHighlightText: "#1E1E1E",
      //   // accent: "#FFFFFF",
      //   accent: "#1E1E1E",
      //   // headerGray: "#1E1E1E",
      //   headerGray: "#F6F3EF",
      // },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// Off-black: #2A2A2A
