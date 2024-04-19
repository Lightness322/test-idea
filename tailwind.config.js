/** @type {import('tailwindcss').Config} */
import autoprefixer from "autoprefixer"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#3d3d3d",
        secondary: "#a2a9a6",
        tertiary: "#fff",
        brand: "#2196f3",
      },
      backgroundColor: {
        "page-tint": "#f3f7fa",
        primary: "#fff",
        secondary: "#b2b9b6",
        brand: "#2196f3",
        "brand-hover": "#f2fcff",
        "buy-btn": "#ff6d00",
        "buy-btn-hover": "#ff8124",
      },
      borderColor: {
        primary: "#d2d9d6",
        brand: "#2196f3",
      },
      fontSize: {
        XS: ["14px", "18px"],
        M: ["16px", "20px"],
        L: ["18px", "22px"],
        XL: ["20px", "24px"],
        "2XL": ["24px", "28px"],
        "3XL": ["30px", "36px"],
        "4XL": ["36px", "44px"],
      },
    },
  },
  plugins: [autoprefixer],
};
