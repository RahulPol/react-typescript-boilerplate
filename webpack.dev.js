const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  // This will tell webpack to run in development mode so your files won't be minfied.
  mode: "development",

  output: {
    filename: "main.js" /** The output file of your compilation */,
    path: path.resolve(__dirname, "dist") /** Location of output file */,
  },
});
