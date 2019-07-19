const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', 
          './src/app/atBat.js',
          './src/app/boxScore.js', 
          './src/app/core.js',
          './src/app/game.js',
          './src/app/gameState.js',
          './src/app/inning.js',
          './src/app/lineup.js',
          './src/app/lineupCombinations.js',
          './src/app/owner.js',
          './src/app/player.js',
          './src/app/possibleLineup.js',
          './src/app/roster.js',
          './src/app/simulation.js',
          './src/app/team.js',
          './src/components/atBatCard.js',
          './src/components/boxScoreCard.js',
          './src/components/gameCard.js',
          './src/components/lineupCard.js',
          './src/components/playerCard.js',
          './src/data/players.js',
          './src/lib/math.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './src/public',
    hot: true
  }
};
