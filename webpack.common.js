const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  // The HtmlWebpackPlugin simplifies creation of HTML files, that include a hash in the filename which changes every compilation.
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
    }),
  ],

  // These options change how modules are resolved.
  resolve: {
    // Add .ts' and '.tsx' as well to resolvable extensions. With this config webpack will resolve .ts & .tsx modules as well.
    extensions: [".ts", ".tsx", ".js"],
  },

  // These options determine how the different types of modules within a project will be treated.
  module: {
    /* Rules contais a test which tests a regulra expression against your code and enforce some rules on it. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser. */
    rules: [
      /* The first rule states, that any file with .ts/.tsx extention should use ts-loader. */

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      /* The second rule states, all output '.js' files will have any sourcemaps re-processed(as we are already creating source maps, check tsconfig)  by 'source-map-loader'. */
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      /* The third rule states, that whenever webpack come across any image file it should export it into ./dist/img folder with hash attached to it. The hash makes sure that browser always load latest copy of image instead of cached copy. */
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "styles",
          },
        },
      },
    ],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
