- vue 項目 搭建
  + yarn 和 npm 包管理器 npm install -g yarn

    yarn  === npm install
    yarn dev === npm run dev

    - npm config ls 用来查看npm 配置
    - 通过nrm来管理npm镜像源地址  npm install -g nrm
    - nrm ls 列出所有镜像源

      npm ---- https://registry.npmjs.org/
      cnpm --- http://r.cnpmjs.org/
    * taobao - https://registry.npm.taobao.org/
      nj ----- https://registry.nodejitsu.com/
      rednpm - http://registry.mirror.cqupt.edu.cn/
      npmMirror  https://skimdb.npmjs.com/registry/
      edunpm - http://registry.enpmjs.org/


    - 用nvm来挂你node版本

  + 全局安裝 vue vue-cli eslint webapck

  + 初始化项目： vue init webpack vueDemo

  ###
  npm install -g moduleName 全局安装

  npm install --save moduleName
  --save 的意思是安装模块,并在package.json 文件的dependencies节点写入依赖。
  npm install --save-dev moduleName
  --save-dev 的意思是安装模块,并在package.json 文件的 devDependencies 节点写入依赖。

  cd vueDemo
  yarn 或者 npm install
  yarn dev 或者 npm run dev

  目录介绍

  src/assets 和 static 的区别
  static 不会被webpack打包文件处理，使用的时候需要用绝对路径来引用。

  webpack 中：
  - vendorvendor的意思是依赖的第三方库，不会经常变更的，单独打包

  - 路由钩子函数
  beforeRouteEnter
  beforeRouteUpdate (2.2 新增)
  beforeRouteLeave

  - axios 的使用
