# Monorepo
Monorepo是管理项目代码的一种方式，指在一个仓库中管理多个模块/包（package）。  
和Monorepo相反的是MultiRepo，指一个仓库只管理一个项目。

## MultiRepo和MonoRepo
MultiRepo:  
**优点：**

- 各个模块自由度高，可自行选在开发规范
- 每个单独的仓库体积不会太大    

**缺点：**

- 仓库分散不好找，管理混乱
- 版本更新麻烦，公共模块版本发生变化，需要更新所有依赖模块的版本

MonoRepo:  
**优点：**

- 一个仓库管理多个模块，开发规范统一
- 有利于版本和依赖的管理，方便模块之间引用和调试，提高本地开发效率

## lerna
Lerna 允许您使用两种模式来管理您的项目：固定模式(Fixed)、独立模式(Independent)

**初始化项目：**
```
lerna init
lerna init --independent
```
**创建子项目：**
```
lerna create xxx
```
**安装依赖：**
```
lerna bootstrap // 会自动为每个依赖包进行 npm install 和 npm link 操作
lerna add module-1 // 给所有子项目安装依赖，在各自的node_module中
lerna add module-1 --dev	// 作为 devDependencies
lerna add module-1 --scope=module-2 // 给某个子项目安装依赖，如果安装的是其他子项目，会创建软链接，指向子项目。在子package.json中显示，安装在根node_modules里
```
**在根目录配置脚本执行子项目的脚本：**
在根目录的package.json中，可以配置脚本执行子项目的package.json中的脚本，这样就可以在根目录下执行脚本，去统一管理所有子项目：
```
{
  scripts: {
    "h5:start": "lerna exec --scope module-h5 -- yarn start",
    "web:start": "lerna exec --scope module-web -- yarn start"
  }
}
```


## monorepo方案1：lerna 结合 yarn workspace
一般lerna搭配yarn workspace来配置MonoRepo开发环境。  
本地开发，项目之间存在依赖，项目多的时候，互相安装依赖比较麻烦。  
启用 yarn workspaces，在yarn instal时，可以把所有的依赖提升到顶层的 node_modules 中，并且在 node_modules 中链接到本地的 package，自动的帮忙解决安装和 link 问题。

lerna和yarn workspaces的功能有重叠，但是有侧重点：
- lerna主要负责创建项目，发布包，管理版本号
- yarn workspace 主要安装包，管理依赖，处理软链

**开启yarn workspaces开发环境：**
package.json:
```
{
  "private": true, //只有私有项目可以开启workspaces
  "workspaces": [
    "packages/lerna-test1",
    "packages/lerna-test2"
  ],
}
```

lerna.json:
```
{
    "useWorkspaces": true,
    "npmClient": "yarn"
}
```
配置好后，查看workspaces：
```
yarn workspaces info
```

**yarn workspaces环境安装包：**
安装到全局的，在根package.json中

```
yarn add xx --ignore-workspace-root-check
yarn add xx -W
```

安装到子项目中，在子项目的package.json中显示，安装到根node_modules里
```
yarn workspace 项目名 add 依赖名
```
