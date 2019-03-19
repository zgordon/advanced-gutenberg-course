const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new ExtractTextPlugin({
  filename: "./assets/css/blocks.style.css"
});
const editBlocksCSSPlugin = new ExtractTextPlugin({
  filename: "./assets/css/blocks.editor.css"
});
const pluginCSSPlugin = new ExtractTextPlugin({
  filename: "./assets/css/plugins.editor.css"
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
  use: [
    { loader: "raw-loader" },
    {
      loader: "postcss-loader",
      options: {
        plugins: [require("autoprefixer")]
      }
    },
    {
      loader: "sass-loader",
      query: {
        outputStyle:
          "production" === process.env.NODE_ENV ? "compressed" : "nested"
      }
    }
  ]
};

module.exports = {
  entry: {
    "./assets/js/blocks.editor": "./blocks/index.js",
    "./assets/js/blocks.frontend": "./blocks/frontend.js",
    "./assets/js/plugins.editor": "./plugins/index.js",
    "./assets/js/filters.editor": "./filters/index.js"
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  watch: "production" !== process.env.NODE_ENV,
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /style\.s?css$/,
        use: blocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /editor\.s?css$/,
        use: editBlocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /plugin\.s?css$/,
        use: pluginCSSPlugin.extract(extractConfig)
      }
    ]
  },
  plugins: [blocksCSSPlugin, editBlocksCSSPlugin, pluginCSSPlugin]
};
