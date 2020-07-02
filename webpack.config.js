const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { basename } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./static/favicon.svg",
      mode: "webapp",
      devMode: "webapp",
      favicons: {
        appName: "Event Tests",
        appDescription: "Event Tests",
        developerName: "Converdy",
        developerURL: null,
        background: "#d8d8d8",
        theme_color: "#08bfb0",
        icons: {
          coast: false,
          yandex: false,
        },
      },
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === "index.html",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
};
