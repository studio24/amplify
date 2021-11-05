const { extendDefaultPlugins } = require('svgo');
module.exports = {
	name: 'preset-default',
	params: {
		overrides: {
			//disable plugins
			removeViewBox: false
		}
	}
}