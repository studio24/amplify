import path from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';

// Manually define __filename and __dirname in an ES module.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [{
	context: path.resolve(__dirname, 'assets-src/js'),
	entry: {
		'main': './main.js',
		'country-autocomplete': './country-autocomplete.js',
		'tabs': './package-extensions/s24-tabby-polyfills.js',
		'splide': './package-extensions/s24-splide.js',
		'sortable-tables': './sortable-tables.js',
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
	name: 'main',
	optimization: {
		minimize: false
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'web/dist/js'),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "./../../node_modules/fontfaceobserver/fontfaceobserver.js", to: "./libraries" }
			]
		})
	]
},
	{
		context: path.resolve(__dirname, 'assets-src/js'),
		entry: {
			'main': './main.js',
			'country-autocomplete': './country-autocomplete.js',
			'tabs': './package-extensions/s24-tabby-polyfills.js',
			'splide': './package-extensions/s24-splide.js',
			'sortable-tables': './sortable-tables.js',
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
		name: 'main',
		optimization: {
			minimize: true
		},
		output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, 'web/dist/js'),
		},
		plugins: [
			new CopyPlugin({
				patterns: [
					{ from: "./../../node_modules/fontfaceobserver/fontfaceobserver.js", to: "./libraries" }
				]
			})
		]
	}];
