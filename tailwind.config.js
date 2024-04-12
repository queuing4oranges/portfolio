/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontSize: {
				'h1': '3rem',
				'h2': '2.5rem',
				'h3': '2rem',
				'h4': '1.5rem'
			},
			colors: {
				dark: '#01101d', // Dark background
				light: '#ebd2c1', // Light color
				accent: '#00C59B', // Accent
				hover: '#236073' // Hover
			}
		},
	},
	plugins: [],
}
