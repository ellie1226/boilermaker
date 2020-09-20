module.exports = {
    entry: './client/App.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname, 
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        // use the style-loader/css-loader combos for anything matching the .css extension
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
  };