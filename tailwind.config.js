/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        custom: {
          black: {
            primary: "#131217",
            secondary: "#1D1D22",
          },
          gray: {
            primary: "#343439",
            secondary: "#707070",
          },
          blue: "#60B2FD",
        },
      },
    },
  },
  plugins: [],
};
