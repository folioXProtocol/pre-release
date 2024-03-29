/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			primary: {
				100: "#DEE4FA",
				200: "#B5C1F0",
				300: "#8197EC",
				400: "#5673E5",
				500: "#3454D1",
				600: "#2744B6",
				700: "#1B3394",
				800: "#10236E",
				900: "#091547",
			},
			dark: {
				100: "#919991",
				200: "#636C63",
				300: "#3F4540",
				400: "#1D261D",
				500: "#071108",
			},
			light: {
				100: "#FFFFFA",
				200: "#EAEAE4",
				300: "#D1D1C9",
				400: "#BEBEB6",
				500: "#A6A6A1",
			},
			success: {
				100: "#E0FBDF",
				200: "#B5F8B4",
				300: "#7DEE7A",
				400: "#46E343",
				500: "#2FCF2C",
				600: "#19A916",
				700: "#138810",
				800: "#096107",
				900: "#043103",
			},
			danger: {
				100: "#FBDFDF",
				200: "#FBB3B3",
				300: "#EE8888",
				400: "#E66666",
				500: "#D04242",
				600: "#B42C2C",
				700: "#891818",
				800: "#5D0E0E",
				900: "#300303",
			},
		},
		extend: {
			backgroundImage: {
				dark: "url('./assets/grid-dark.png')",
				light: "url('./assets/grid-dark.png)",
			}
		},
	},
	plugins: [],
};

