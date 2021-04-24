module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screen: {
				xs: '400px',
				'3X1': '1920px'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
