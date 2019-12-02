
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

require('@babel/register');

 module.exports = {
  target: "node",
  mode:"production",
  entry: {
    app: ["./bin.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: './node_modules/iohook/builds', to: 'platforms' },
    ]),
  ],
 }