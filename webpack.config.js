const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, 'assets-src/js'),
	entry: {
		main: './main.js',
		countryAutocomplete: './country-autocomplete.js',
		tabs: './package-extensions/s24-tabby-polyfills.js'
	},
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
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