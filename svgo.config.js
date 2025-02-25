export default {
	plugins: [
		{
			name: 'removeScriptElement'
		},
		{
			name: 'preset-default',
			params: {
				overrides: {
					// manage plugins
					removeViewBox: false,
					removeUnknownsAndDefaults: false
				},
			},
		}
	],
};
