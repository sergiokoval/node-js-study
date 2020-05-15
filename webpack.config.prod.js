import path from 'path';
import webpack from 'webpack';
import htmlWebPackPlugin from 'html-webpack-plugin';

export default  {
    devtool: 'source-map',
    entry: [
      path.resolve(__dirname, 'src/index')
    ],
    target:'web',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new htmlWebPackPlugin({
        template: 'src/index.html',
        inject: 'true'
      }),
      // eliminate duplicate packages wehn generating bundle
      new webpack.optimize.DedupePlugin(),
      // minify js
      new webpack.optimize.UglifyJsPlugin()
     ],
    module: {
      loaders: [
        { test: /\.css$/, exclude: /node_modules/, loaders:['babel-loader']},
        { test:/\.css$/, loaders: ['style-loader', 'css-loader']}
      ]
    }
}