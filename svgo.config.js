module.exports = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// disable plugins
					removeViewBox: false,
					removeUnknownsAndDefaults: false
				},
			},
		},
	],
};