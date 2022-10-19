const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {'@primary-color': '#1DA57A'},
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.json',
			},
		},
	],
};
