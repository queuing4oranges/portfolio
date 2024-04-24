/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontSize: {
				'3xl': '3rem', // Make custom utility class names
				'2xl': '2.5rem',
				'xl': '2rem',
				'md': '1.5rem',
				'sm': '0.75rem'
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
