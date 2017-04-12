const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
      app: './src/MathService.ts',
      vendor: './vendor.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'}
    ]
  },
  // Source maps support ('inline-source-map' also works) 
  devtool: 'source-map',
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)
      minChunks: Infinity,
      // (with infinite minimum entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
  ]
};

module.exports = config;