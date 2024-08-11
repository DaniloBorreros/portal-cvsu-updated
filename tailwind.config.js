/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          royalblue : "#1E06E5",
          yellow: "#F9D906"
        }
      },
    },
  },
  plugins: [
    require ('flowbite/plugin')
  ],

};
