const path = require('path');

module.exports = {
  entry: ['core-js', 'regenerator-runtime/runtime', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/scripts/',
  },
  devtool: 'source-map',
};
