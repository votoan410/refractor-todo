const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  // tell webpack where to start bundling the javascript files
  entry: "./src/index.js",
  //   Define output path for the bundled file, tell webpack to create the final bundled file in dist folder in the root of the project.
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  // tell webpack inject the bundled js file as script tag
  plugins: [
    // new ESLintPlugin(options),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  //   configure webpack to use babel
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
};
