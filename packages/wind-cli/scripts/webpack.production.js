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
  output: {
    filename: 'static/[name].js',
    path: paths.output
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: existsSync(paths.temHtml) ? paths.temHtml : paths.cliHtml
    })
  ]
})