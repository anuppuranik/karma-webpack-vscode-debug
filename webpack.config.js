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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins:[]
};

module.exports = config;