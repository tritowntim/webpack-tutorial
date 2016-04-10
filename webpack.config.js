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
        loader:   "style!css?modules"
      }
    ]
  },

  devServer:  {
    contentBase:        "./public",
    colors:             true,
    historyApiFallback: true,
    inline:             true
  }
};
