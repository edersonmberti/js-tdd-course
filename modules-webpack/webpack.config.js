const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    filename: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  mode: "production"
};
