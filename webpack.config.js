var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool:    "source-map",

  entry:      __dirname + "/app/main.js",
  output: {
    path:     __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test:     /\.json$/,
        loader:   "json"
      },
      {
        test:     /\.js$/,
        excludes: /node_modules/,
        loader:   "babel"
      },
      {
        test:     /\.css$/,
        loader:   ExtractTextPlugin.extract("style", "css?modules!postcss")
      }
    ]
  },

  postcss: [require("autoprefixer")],

  plugins: [
    new webpack.BannerPlugin("Courtesy Tritown Industries"),
    new HtmlWebpackPlugin({ template: __dirname + "/app/index.tmpl.html"}),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],

  devServer:  {
    colors:             true,
    historyApiFallback: true,
    inline:             true,
    hot:                true
  }
};
