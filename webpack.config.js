const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/js/main.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { // Define file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // plugins: [ // Array of plugins to apply to build chunk
  //   new HtmlWebpackPlugin({
  //     template: path.join(paths.public, 'index.html'),
  //     inject: 'body'
  //   })
  // ],
  devServer: { // Configuration for webpack-dev-server
    contentBase: path.resolve(__dirname, 'src'),
    port: 8080
  },
}