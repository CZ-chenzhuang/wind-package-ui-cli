const path = require('path')
const currentWorkDir = process.cwd()

module.exports = {
  entry: path.resolve(currentWorkDir, 'src/index.js'),
  output: path.resolve(currentWorkDir, 'dist'),
  temHtml: path.resolve(currentWorkDir, 'public/index.html'),
  cliHtml: path.resolve(__dirname, '../public/index.html')
}