module.exports = {
	entry: './src/App.jsx',

	output: {
		filename: 'bundle.js',
		path: __dirname + '/public',
	},

	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.styl$/,
				loaders: ['style-loader', 'css-loader', 'stylus-loader']
			}
		]
	},

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css']
	}
};