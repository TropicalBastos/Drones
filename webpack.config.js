var config = {
    entry: './frontend/src/main.js',
    output: {
       path: __dirname + '/frontend/dist',
       filename: 'index.js',
    },
    module: {
       rules: [
          {
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;