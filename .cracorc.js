
const path = require('path');
const CracoAliasPlugin = require('craco-alias');
const CracoSassResourcesLoader = require('craco-sass-resources-loader');
const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

const {
  PUBLIC_URL
} = process.env

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: PUBLIC_URL,
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    overlay: true,
    proxy: {
      '/squat/api/**': {
        target: 'http://crmtest.baixing.com.cn/',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
      },
    }
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: './',
        aliases: {
          "@": "./src"
        }
      }
    },
    {
      plugin: CracoSassResourcesLoader,
      options: {
        resources: './src/assets/scss/variables.scss',
      },
    },
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        skipPreflightCheck: true,
        eslintOptions: {
          failOnError: false,
          emitWarning: true
        },
      },
    },
  ],
};
