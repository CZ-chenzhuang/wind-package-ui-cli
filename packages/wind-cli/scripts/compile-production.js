const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.production')


webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString('errors-only'));
  } else {
    // console.log(stats);
        // 获取 chunk 信息
        // const { assetsByChunkName, chunks } = stats.toJson({ all: false, chunks: true });

        // console.log('Chunk Names:', Object.keys(assetsByChunkName).join(', '));
    
        // chunks.forEach(chunk => {
        //   console.log(`Chunk ${chunk.names.join(', ')}: ${chunk.files.join(', ')}`);
        // });
    
        console.log(stats.toString({colors: true, modules: false}));
    
  }
});