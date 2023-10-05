/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#664efe',
				secondary: '#8d8a97',
				'primary-dark': '#1e1c2e',
				'input-gray': '#272541'
			}
		}
	},
	plugins: []
}
