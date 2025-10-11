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
        midnight: {
          900: "#0b1021",
          700: "#151a30"
        }
      },
      backgroundImage: {
        'orbital-gradient': "radial-gradient(circle at 20% 20%, rgba(108,99,255,0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(circle at 50% 80%, rgba(236,72,153,0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};
