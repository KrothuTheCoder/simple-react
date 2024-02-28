const path = require('path');

module.exports = {
  entry: ['./src/index.js','./src/components/go.js','./src/components/donkey.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }, 
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // Convert small images to base64 URIs
            name: 'images/[name].[ext]', // Output path for images
          },
        },
      }
    ],
  },
 
};