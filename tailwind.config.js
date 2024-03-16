/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontSize: {
				'h1': '3rem',
				'h2': '2.5rem',
				'h3': '2rem'
			},
			colors: {
				dark: '#01101d', // Used for dark background
				light: '#ebd2c1', // Used for light color				
			}
		},
	},
	plugins: [],
}
