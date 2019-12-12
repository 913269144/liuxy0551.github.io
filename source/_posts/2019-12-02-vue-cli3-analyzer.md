---
title: 前端项目优化之旅（一）—— 分析插件
urlname: vue-cli3-analyzer
tags:
  - Vue
categories:
  - Vue
author: liuxy0551
copyright: true
hidden: true
date: 2019-12-02 13:06:10
updated: 2019-12-02 13:06:10
---

## 介绍

　　上个月有好几个项目需要部署上线，其中有一个项目需要在钉钉第三方应用市场上线，而钉钉对于页面性能、白屏率等有硬性要求，所以对这个项目做了很多打包优化。
这里以新写的 [vue-cli3-build-optimization](https://github.com/liuxy0551/vue-cli3-build-optimization) 作为记录对象：
<!--more-->


### 一、优化前的效果

　　优化前页面打开基本需要`2.4s`左右
![](/images/posts/vue-cli3-analyzer/1.png)


### 二、分析工具

　　除去常见的局部引入操作，我们要优化的还有很多。这个时候，可视化的分析工具就显得很重要了。

#### 1、安装分析插件

　　安装`webpack-bundle-analyzer`：

``` shell
npm i webpack-bundle-analyzer -D
```

　　有以下两种配置方案，推荐第一种

#### 2、运行指定命令查看`推荐`

　　将分析插件作为一个独立的 script，在`package.json -> scripts`中添加一行`"analyzer": "use_analyzer=true npm run serve"`：

``` javascript
package.json
"scripts": {
  ...
  "analyzer": "use_analyzer=true npm run serve"
}
```

　　在 vue.config.js 中对 webpack 进行配置：

``` javascript
module.exports = {
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}
```

　　这样只会在使用以下命令时才会自动打开浏览器并访问 [http://127.0.0.1:8888](http://127.0.0.1:8888/)

``` shell
npm run analyzer
```

#### 3、运行即查看

　　在 vue.config.js 中对 webpack 进行配置：

``` javascript
module.exports = {
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
```

　　接下运行`npm run serve`即可，会自动打开浏览器并访问 [http://127.0.0.1:8888](http://127.0.0.1:8888/)


### 三、分析优化

![](/images/posts/vue-cli3-analyzer/2.png)

　　可以看到，除去几项 vue 必须的文件外，Vant 所占比例不容小觑。Vant 的按需引入参考：[方式一. 自动按需引入组件 (推荐)](https://youzan.github.io/vant/#/zh-CN/quickstart#yin-ru-zu-jian)

#### 1、安装分析插件








>**注意**
>* **JavaScript 中没有堆栈的概念，通过堆栈的方式，可以更好地理解代码的执行方式**

![](/images/posts/js-typeof/1.png)

