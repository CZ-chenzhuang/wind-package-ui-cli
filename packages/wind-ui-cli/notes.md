webpack配置react + typescript开发环境：

## 处理样式


## 打包文件


## js语法兼容
可以把es6等新语法，转成es5语法，在一些特殊浏览器也可以正常运行。
```
npm install -D babel-loader @babel/core @babel/preset-env
```
- babel-loader ：webpack中用babel解析ES6的桥梁
- @babel/core：babel的核心模块，提供了编译所需的所有api
- @babel/preset-env：babel预设，一组babel插件的集合
然后在webpack.config.js文件中添加如下配置：
```
{
  test: /\.js$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
},
```
通常情况下，`@babel/preset-env`只转换那些已经形成正式标准的语法，对于某些处于早期阶段、还没有确定的语法不做转换。
如果要转换这些语法，就要单独使用插件。

**@babel/plugin-transform-runtime 插件：**

@babel/runtime 是 Babel 提供的一个运行时库，用于提供在编译过程中所需的一些辅助函数和 polyfills。这个库主要用于解决 Babel 转译过程中可能产生的代码冗余和模块之间的重复引入问题。  

在 JavaScript 中，一些语法特性或新的 API 可能需要在运行时进行支持。例如，一些 ECMAScript 6（ES6）的特性，如 Promise、Set、Map 等，以及一些 async/await 相关的辅助函数，都可能需要在编译后的代码中引入对应的 polyfill 或辅助函数。  

@babel/runtime 通过将这些辅助函数和 polyfills 提供为一个运行时库，帮助避免将这些代码注入到每个使用了这些特性的文件中，从而减小了最终生成的代码的体积。  

使用 @babel/plugin-transform-runtime 插件，可以在 Babel 转译过程中将这些辅助函数和 polyfills 从 @babel/runtime 模块导入，而不是在每个文件中生成，从而减少了冗余的代码。这样，生成的代码中就只包含一份这些辅助函数和 polyfills，而不是每个文件都包含一份。  

总体而言，@babel/runtime 有助于优化编译后的代码，并提供了一种更加精细化管理和组织编译过程中所需运行时代码的方式。    

配置如下：
```
{
  loader: "babel-loader",
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      "@babel/plugin-transform-runtime",
    ]
  }
}
```

**@babel/plugin-proposal-decorators：**
 Babel 插件之一，用于支持 ECMAScript 装饰器（Decorators）语法提案。装饰器是一种用于修改类和类成员的语法，它还处于 ECMAScript 提案的阶段，但已经在许多前端框架和工具中得到了广泛的应用，如 React、Angular 等。

安装插件：
```
npm install --save-dev @babel/plugin-proposal-decorators
```
配置：
```
{
  loader: "babel-loader",
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      "@babel/plugin-transform-runtime",
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]
  }
}
```
legacy: true 选项表示使用传统的装饰器语法，这是因为装饰器语法经历了一些变化，目前尚未完全稳定。

**@babel/plugin-proposal-class-properties" 'babel-plugin-transform-class-properties'**
对于大多数现代浏览器和 Node.js 版本，原生支持类声明属性的语法，无需额外的 Babel 插件进行转译。使用 babel-plugin-transform-class-properties 插件主要是为了在某些环境中或者特殊情况下提供更广泛的兼容性，因为这个插件可以将类属性的语法转换为兼容性更好的形式。

如果你的项目目标是现代浏览器或者 Node.js，而且你的 Babel 配置中包含了 @babel/preset-env，那么通常不需要额外安装和配置 babel-plugin-transform-class-properties 插件。@babel/preset-env 中已经包含了对类属性的转译规则。

## 打包jsx文件
在项目中安装 Babel 相关的依赖，包括 @babel/core、@babel/preset-env、@babel/preset-react 以及 babel-loader。
```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
配置babel预设：
```
{
  loader: "babel-loader",
  options: {
    presets: [
      '@babel/preset-env',
      "@babel/preset-react",
    ]
  }
}
```
这里使用了 @babel/preset-env 来支持最新的 ECMAScript 特性，以及 @babel/preset-react 来支持 JSX 语法。

## 打包ts文件
使用 @babel/preset-typescript，它允许你通过 Babel 来处理 TypeScript 代码，而不依赖于 ts-loader 这样的 TypeScript Loader。  
首先，确保你已经安装了 @babel/preset-typescript 和 @babel/preset-env：
**安装：**
```
npm install --save-dev @babel/preset-typescript @babel/preset-env
```
**配置：**
```
{
  test: /.(ts|tsx)$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-typescript",
          "@babel/preset-env",
        ],
      },
    },
  ]
}
```
这样配置后，Babel 将会使用 @babel/preset-env 来支持最新的 ECMAScript 特性，而使用 @babel/preset-typescript 处理 TypeScript 代码。  

`
还可以使用ts-loader来编译ts文件，它是webpack的单独的loader，@babel/preset-typescript是babel的预设
`

## 打包tsx文件
首先，确保你已经安装了 @babel/preset-typescript 和@babel/preset-react、 @babel/preset-env  
@babel/preset-typescript编译ts，@babel/preset-react编译jsx，这样就可以编译tsx文件了，
@babel/preset-env 来支持最新的ECMAScript语法。 
**安装：**
```
npm install --save-dev @babel/preset-typescript @babel/preset-react @babel/preset-env
```
**配置：**
```
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
      },
    },
  ]
}
```