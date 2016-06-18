var webpack = require("webpack");
module.exports = {
  // context: __dirname + "/app",
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url?limit=1000',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },{
        test: /\.html$/,
        loader: 'raw'
      }
    ],
  },
  watch: true,
  externals: {
    "jquery": "jQuery"
  }
};
