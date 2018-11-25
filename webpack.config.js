'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * mode can be "development" or "production"
   * "development" tells Webpack that we want fast incremental builds, easy code debugging and other development features
   * "production" tells that we want small JS file with optimized code
   */
  mode: process.env.NODE_ENV || 'development',

  /**
   * Entry is the head of our dependency graph
   */
  entry: './src/index.jsx',

  /**
   * Type of source mpas
   */
  devtool: 'cheap-module-source-maps',

  resolve: {
    /**
     * This array contains extensions which we can omit when importing a file
     */
    extensions: ['.js', '.jsx'],
  },

  /**
   * module section tells Webpack how to transform something into JS
   * in this case we want to transform JSX to JS so we use Babel for that
   */
  module: {
    rules: [{
      /**
       * If our file matches this RegExp that this rule is applied for file loading
       */
      test: /\.jsx?$/,
      /**
       * We don't want to transform code which is located in node_modules because it is already transformed by
       * library authors
       */
      exclude: /node_modules/,
      /**
       * Array of loaders used for transforming our file into JS
       */
      use: [{
        /**
         * babel-loader transform file using Babel
         */
        loader: 'babel-loader',
        options: {
          /**
           * Tells Babel to cache our results for faster builds
           */
          cacheDirectory: true,
          /**
           * Babel presets
           */
          presets: [
            /**
             * @babel/preset-env with disabled modules so Webpack can track the dependencies
             */
            ['@babel/env', {
              modules: false,
              targets: {
                browsers: ['last 2 versions', 'ie >= 11'],
              },
              shippedProposals: true,
            }],
            /**
             * @babel/preset-react for transforming JSX into React.createElement
             */
            '@babel/react',
          ],
          /**
           * Plugin for using class properties syntax
           */
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      }],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },

  plugins: [
    /**
     * Webpack doesn't know how to work with HTML so we use HtmlWebpackPlugin to inject our JS code into HTML
     */
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true
  },
};
