const path = require('path');
const BUILD_DIR = path.join(__dirname, 'templates', 'marketplace_builder', 'assets');

module.exports = {
  entry: {
    'crowded-google-map': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory'
        }
      }
    ]
  },
  mode: 'production'
};
