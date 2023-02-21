/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				'ProximaNova': ['ProximaNova', 'Arial', 'sans-serif'],
				'FuturaStd': ['FuturaStd', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [
		require("tw-elements/dist/plugin"),
	],
}
