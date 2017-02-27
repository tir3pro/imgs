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
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			// {
			// 	test: /\.jpg$/,
			// 	loaders: ['url-loader'],
			// 	query: {mimetype: "image/png"}
			// }
		]
	},

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.scss']
	}
};