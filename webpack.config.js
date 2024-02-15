const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "script.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // to import index.html file inside index.js
      favicon : "public/favicon.png"
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        include: srcPath,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        use:{
            loader: "url-loader",
            options: { limit: false },
        },
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
};