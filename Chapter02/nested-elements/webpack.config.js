module.exports = {
  entry: [
    './main.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'main-bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
