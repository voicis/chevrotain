//@ts-check

"use strict"

const path = require("path")

/**@type {import('webpack').Configuration}*/
const config = {
  target: "node", // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  mode: "production",
  entry: "./sample.js", // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs"
  },
  node: {
    __dirname: false // leave the __dirname-behaviour intact
  },
  resolve: {
    extensions: [".js", ".json"]
  }
}
module.exports = config
