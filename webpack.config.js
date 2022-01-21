const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src/js'),
	entry: {
		main: './main.js',
		slider: './slider.js',
		countryAutocomplete: './country-autocomplete.js',
		tabs: './package-extensions/s24-tabby-polyfills.js'
	},
	mode: 'none',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'web/dist/js'),
	},
	optimization: {
		minimize: false
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				// { from: "./libraries/", to:  "./libraries" },
				{ from: "./../../node_modules/fontfaceobserver/fontfaceobserver.js", to: "./libraries" }
			]
		})
	]
};