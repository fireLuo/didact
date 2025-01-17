module.exports = {
  mode: 'development',
  entry: {
    main: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                { pragma: 'Didact.createElement' },
              ],
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
};
