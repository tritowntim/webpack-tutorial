var webpack = require("webpack");

module.exports = {
  devtool:    "source-map",

  entry:      __dirname + "/app/main.js",
  output: {
    path:     __dirname + "/public",
    filename: "bundle.js"
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
        loader:   "style!css?modules!postcss"
      }
    ]
  },

  postcss: [require("autoprefixer")],

  plugins: [
    new webpack.BannerPlugin("Courtesy Tritown Industries")
  ],

  devServer:  {
    contentBase:        "./public",
    colors:             true,
    historyApiFallback: true,
    inline:             true
  }
};
