var config = {
    mode: 'development',
    entry: './frontend/src/App.js',
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
          },
          {
              test: /\.scss$/,
              use: [
                "style-loader", // creates style nodes from JS strings
                { 
                    loader: "css-loader", 
                    options: {
                        url: false
                    } 
                }, // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
              ]
          }
       ]
    }
 }

 module.exports = config;