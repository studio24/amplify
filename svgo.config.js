module.exports = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// manage plugins
					removeViewBox: false,
					removeUnknownsAndDefaults: false,
					removeScriptElement: true
				},
			},
		},
	],
};