// tailwind.config.js

module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		colors: {
			primary: '#664efe',
			secondary: '#8d8a97',
			'primary-dark': '#1e1c2e'
		},
		extend: {}
	},
	plugins: []
}
