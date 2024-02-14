/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        National: ["National 2 Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
        screens: {
					sm: "750px",
					md: "970px",
					lg: "1230px",
          xl: "1398px",
				},
      },
      colors: {
        "black": "#000000",
        "white": "#FFFFFF",
        "raven": "#080f0f",
        "raven-60": "#6b6f6f",
        "raven-30": "#a0a7a7",
        "pumpkin": "#ff6100",
        "aquamarine": "#3cffc3",
        "azure": "#30c5ff",
        "pale-azure": "#ade8ff",
        "miami": "#ffd6f3",
        "violet": "#b500ff",
        "lavender": "#e5beed",
        "candy-apple": "#ff304c",
        "mint": "#a9f0d1",
        "snow": "#fff7f8",
      },
      fontSize: {
        h1: ["190px", "150px"],
        h2: ["100px", "85px"],
        h3: ["60px", "56px"],
        h4: ["40px", "56px"],
        h5: ["27px", "34px"],
        h6: ["24px", "36px"],
        p: ["14px", "100%"],
      },
    },
  },
  plugins: [],
};
