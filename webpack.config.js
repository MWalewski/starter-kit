const path = require("path");

module.exports = {
  entry: "./scripts/temp/index.js",
  output: {
    path: path.resolve(__dirname, "./scripts/"),
    filename: "index-bundled.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
