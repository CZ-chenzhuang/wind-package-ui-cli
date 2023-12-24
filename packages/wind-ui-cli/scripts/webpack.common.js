const path = require('path')

const styleLoader = {
  loader: 'style-loader'
}
const cssLoader = {
  loader: 'css-loader'
}
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                "@babel/preset-react",
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true,
                  },
                ],
              ]
            }
          }
        ]
      },
      {
        test: /.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-typescript",
                "@babel/preset-react",
                "@babel/preset-env",
              ],
              plugins:[
                "@babel/plugin-transform-runtime",
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true,
                  },
                ]
              ]
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
            styleLoader,
            cssLoader
        ]
      },
      {
        test: /\.(sc|sa)ss$/,
        use: [
          styleLoader,
          cssLoader,
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          styleLoader,
          cssLoader,
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|woff|ttf)$/,
        //inline 相当于 url-loader
        // type: "asset/inline",
        type: "asset/resource",
      }
    ]
  },
  stats: {
    colors: true
  }
}