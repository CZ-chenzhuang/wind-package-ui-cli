# 脚手架

**package.json中添加一个脚本：**
```
 "bin": "scripts/index.js",
```
表示要执行的是哪个文件，上面的写法，命令名字就是`package.json`中的name字段。  
还可以自己定义名字：
```
"bin": {
  "wind": "scripts/index.js",
  "wind-cli": "scripts/index.js"
}
```

**执行文件添加说明：**
```
#!/usr/bin/env node
```
表示该脚本用node去执行

**链接到本地**
```
npm link
npm link --force // 强制覆盖之前有的命令
```
链接到本地环境，方便测试，命令默认的名字是`package.json`中的name字段


**配置可执行命令 commamder**

**命令行交互功能 inquirer**

**等待，进度条效果 ora**

**下载git仓库的模版文件**
download-git-repo



**为什么要自己去实现一个脚手架：**
- 项目多，统一代码规范
- webpack有一些特殊的配置，每个工程都要配置，复制粘贴一遍。所以封装成脚手架，功能方便复用