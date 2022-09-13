const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
  devtool: "inline-source-map",
  devServer: { static: "./dist", port: 3001, historyApiFallback: true },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: { extensions: [".jsx", ".ts", ".js", ".tsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new ProvidePlugin({
      React: "react", // automatically import react where needed
    }),
  ],
};
