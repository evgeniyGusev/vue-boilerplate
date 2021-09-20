const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      files: ['/**/*.{vue,html,scss}'],
      fix: false,
      cache: true,
      emitErrors: true,
      failOnError: true,
    }),
  ],
};
