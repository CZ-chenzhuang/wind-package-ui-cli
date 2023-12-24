const path = require('path')
const { existsSync } = require('fs')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.common')

// console.log(process.cwd(), 'cwd')
// console.log(__dirname, 'dirname')
module.exports = merge(common,{
  mode: "development",
  devtool: "source-map",
  entry: {
    main: paths.entry
  },
  output: {
    filename: 'static/[name].js',
    path: paths.output
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: existsSync(paths.temHtml) ? paths.temHtml : paths.cliHtml
    })
  ],
  devServer: {
    open: true,
    historyApiFallback: true, //不加会报错can't GET /
    port: 3300,
    compress: true,
    headers:{
        "Access-Control-Allow-Origin":"*"
    },
    hot: true,
    allowedHosts: "all",
    // static:[{
    //     directory: path.resolve(process.cwd(), 'build'),
    //     publicPath: '/build',
    // },{
    //     directory: path.resolve(__dirname,'../public/'),
    // }],
  },
})