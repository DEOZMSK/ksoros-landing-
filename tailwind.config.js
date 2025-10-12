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
        background: "#0b0f19",
        surface: "#11192b",
        outline: "#1f2a40",
        muted: "#8ea0c2",
        accent: {
          DEFAULT: "#4f46e5",
          hover: "#4338ca"
        }
      },
      maxWidth: {
        content: "64rem"
      },
      boxShadow: {
        focus: "0 0 0 4px rgba(79,70,229,0.25)"
      }
    }
  },
  plugins: []
};
