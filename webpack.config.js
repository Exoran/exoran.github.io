var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client/src/');
var ROOT_DIR = path.resolve(__dirname, '');

var config = {
  entry: {
    '/': APP_DIR + '/app/index.jsx',
    'fcc/leaderboard/':  APP_DIR + '/fcc/leaderboard/index.jsx',
    'fcc/markdown/':  APP_DIR + '/fcc/markdown/index.jsx',
    //'fcc/calculator/':  APP_DIR + '/fcc/calculator/index.jsx',
    //'fcc/pomodoro/':    APP_DIR + '/fcc/pomodoro/index.jsx',
    //'fcc/quote/':       APP_DIR + '/fcc/quote/index.jsx',
    //'fcc/tictactoe/':   APP_DIR + '/fcc/tictactoe/index.jsx',
    //'fcc/tribute/':     APP_DIR + '/fcc/tribute/index.jsx',
    //'fcc/twitch/':      APP_DIR + '/fcc/twitch/index.jsx',
    //'fcc/weather/':     APP_DIR + '/fcc/weather/index.jsx',
    //'piechart/':        APP_DIR + '/piechart/index.jsx'
  },
  devtool: 'source',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  cache: true,
  output: {
    path: BUILD_DIR,
    filename: '[name]index.js'
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.join(ROOT_DIR, 'vendor.json'))
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [
          APP_DIR,
          //path.resolve(__dirname, "node_modules/react-particles-js")
        ],
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
