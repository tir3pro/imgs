module.exports = {
	entry: './src/index.jsx',

	output: {
		filename: 'bundle.js',
		path: __dirname + '/public',
	},

	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000,
    historyApiFallback: true
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.jpg$/,
				loaders: ['url-loader']
			}
		]
	},

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.scss']
	}
};