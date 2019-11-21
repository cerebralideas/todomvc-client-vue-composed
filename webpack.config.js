const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: './src/app.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.bundle.js'
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};