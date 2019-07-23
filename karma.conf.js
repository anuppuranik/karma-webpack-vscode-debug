// Karma configuration
// Generated on 2017-03-31
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');


// Lets modify the webpackconfig to make it to play well with karma-webpack
// 1. Commons chunk plugin doesn't work with karma-webpack, so removing it.
// const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
// webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);
// 2. Lets remove dev tools and add the source map plugin
webpackConfig.devtool = false;
webpackConfig.plugins.push (
  new webpack.SourceMapDevToolPlugin({
    // The default webpack devtool does not add source maps for files that do not end in .js
    // So this little hack to it to make it also process .ts files
    // filename: '[name].js.map', // This could be null in which case when no value is provided the default will be inlined.
    filename: null,
    test: /\.(ts|js)($|\?)/i // processes js and ts files only
  })
);

module.exports = function( config ) {
  'use strict';

  config.set( {
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser.
    // These entry points should in turn 'require'/'import' the scripts that they test so that webpack follows them and packs them into bundles
    files: [
      'test/**/*.js',
      'test/**/*.ts'
      // each file acts as entry point for the webpack configuration
    ],

    // list of files / patterns to exclude
    exclude: [
    ],
    
    // List of pre processors to use
    // This list of patterns must be equal to those entry points that need to be handled by webpak.
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.ts': ['webpack', 'sourcemap']
    },

    // Lets set the entire webConfig as is here.
    webpack: webpackConfig,

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'ChromeDebugging'
    ],

    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: [ '--remote-debugging-port=9333' ]
      }
    },

    // Which plugins to enable
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,
    
    // Karma serves ts file as movies, sadly! So this fix is required.
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  } );
};
