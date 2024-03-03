/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#162023",
        primaryLightBlue: "#001215",
        primaryBlue: "#071952",
        secondaryBlue: "#094067",
        lightGray: "#3F4751",
      },
    },
  },
  plugins: [],
};
