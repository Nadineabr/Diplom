const path = require('path');

module.exports = {
  entry: ["@babel/polyfill", "./script.js"],
  mode: "none",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};