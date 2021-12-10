const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src/js'),
	entry: {
		main: './main.js',
		slider: './slider.js',
		countryAutocomplete: './country-autocomplete.js'
	},
	mode: 'none',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'web/dist/js'),
	},
	optimization: {
		minimize: false
	}
};