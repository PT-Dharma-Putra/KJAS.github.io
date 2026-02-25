/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
	theme: {
		extend: {
			colors: {
				primary: "#8B572A", // Terracotta
				secondary: "#D4A373", // Lighter Tan
				"background-light": "#FDFCF0", // Ivory/Off-white
				"background-dark": "#1A1612", // Deep Espresso
				"accent-tan": "#BC8F5F",
			},
			fontFamily: {
				display: ["Playfair Display", "serif"],
				sans: ["Inter", "sans-serif"],
				script: ["Great Vibes", "cursive"],
			},
			borderRadius: {
				DEFAULT: "0.5rem",
				xl: "1rem",
				"2xl": "1.5rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
	darkMode: "class",
};
