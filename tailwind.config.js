/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070714",
        surface: "#10172b",
        outline: "#1e2741",
        muted: "#9fb2d8",
        accent: {
          DEFAULT: "#f472b6",
          hover: "#fb7185"
        }
      },
      maxWidth: {
        content: "64rem"
      },
      boxShadow: {
        focus: "0 0 0 4px rgba(244,114,182,0.28)"
      },
      keyframes: {
        "soft-pulse": {
          "0%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "0.55", transform: "scale(1)" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        "soft-pulse": "soft-pulse 14s ease-in-out infinite",
        float: "float 18s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
