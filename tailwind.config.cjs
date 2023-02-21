/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'ProximaNova': ['ProximaNova', 'Arial', 'sans-serif'],
				'FuturaStd': ['FuturaStd', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
