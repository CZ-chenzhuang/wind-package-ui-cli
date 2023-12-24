const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.development')


let compiler = webpack(config);
const server = new WebpackDevServer(config.devServer, compiler);

const runServer = async () => {
  console.log('Starting server...');
};

runServer();
server.startCallback(() => {
  console.log('Successfully started server');
});
