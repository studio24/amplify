export default {
	plugins: [
		{
			name: 'removeScripts'
		},
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeUnknownsAndDefaults: false
				},
			},
		}
	],
};
