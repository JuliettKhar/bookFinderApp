const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
		entry: {
			index: './src/js/index.js'
		},
		output: {
				filename: '[name].bundle.js',
				path: path.join(__dirname, '/build')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['es2015']
						}
					}
				},
				{
						test: /\.css$/,
						use: [
							{loader: "style-loader"},
							{loader: "css-loader"}
						]
				},
				{
						test: /\.scss$/,
						include: path.resolve(__dirname, "src/scss"),
						use: [
						  {
		            loader: miniCssExtractPlugin.loader,
		            options: {}
          		},
							{loader: "css-loader"},
							{loader: "sass-loader"}
						]
				},
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: "common",
						chunks: "all"
					}
				}
			}
		},
		plugins: [
			new htmlWebpackPlugin({
				template: 'src/index.html',
				title: 'Book Finder App'
			}),
			new miniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
		],
		devServer: {
			contentBase: path.join(__dirname, "build"),
			compress: true,
			port: 9000
		},

}