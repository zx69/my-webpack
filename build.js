const path = require('path');
const webpack = require('./core/index');

const options = {
  entry: './test/app.js',
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
  },
  module: {
      rules: []
  }
}

const complier = webpack(options);

complier.run()