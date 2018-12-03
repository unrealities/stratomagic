const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', 
          './src/app/atBat.js', 
          './src/app/core.js',
          './src/app/game.js',
          './src/app/inning.js',
          './src/components/playerCard.js',
          './src/data/players.js',
          './src/lib/math.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
    contentBase: './dist',
    hot: true
  }
};
