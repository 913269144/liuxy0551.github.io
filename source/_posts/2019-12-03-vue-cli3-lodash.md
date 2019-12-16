---
title: 前端项目优化之旅（三）—— Lodash 单独引入函数
urlname: vue-cli3-lodash
tags:
  - Vue
  - Lodash
categories:
  - Vue
  - Lodash
author: liuxy0551
copyright: true
date: 2019-12-04 20:39:58
updated: 2019-12-04 20:39:58
---

## 介绍

　　`前端项目优化之旅`系列随笔主要记录工作中遇到的一些优化方案，这里记录一下在 Vue CLI 3 项目中单独引用 Lodash 函数。
<!--more-->


### 一、安装 lodash

　　[Lodash](https://www.lodashjs.com/docs/latest) 经常用来处理一些复杂的数据逻辑，比如常见的：数组去重、数组删除元素等等，可以有效减少项目中的复杂逻辑代码。

``` shell
npm i lodash -S
```


### 二、完全引入 lodash

　　举例：拆分数组（生成二维数组）

``` javascript
  import _ from 'lodash'
  
  _.chunk(['a', 'b', 'c', 'd'], 2)
  // => [['a', 'b'], ['c', 'd']]
```
![](/images/posts/vue-cli3-lodash/1.png)


### 三、单独引入 lodash `推荐`

　　举例：拆分数组（生成二维数组）

``` javascript
  import chunk from 'lodash/chunk'
  
  chunk(['a', 'b', 'c', 'd'], 2)
  // => [['a', 'b'], ['c', 'd']]
```
![](/images/posts/vue-cli3-lodash/2.png)


- 文件大小从`1.33 MB`缩小到`867.78 KB`，主要体现在 lodash 文件缩小了`550+ KB`
