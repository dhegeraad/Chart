var path = require('path');

module.exports = {
    entry: './src/ChartService.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'build.js',
      path: path.resolve(__dirname, 'dist')
    }
  };