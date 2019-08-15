---
title: 将个人空间放到服务器上ssh/scp/nginx  free -h/top
urlname: server-static-page
tags:
  - Server
  - Linux
categories:
  - Server
  - Linux
author: liuxy0551
copyright: true
date: 2019-08-15 17:23:45
updated: 2019-08-15 17:23:45
---

## 介绍

最近拿到一个服务器，尝试着把基于 Hexo 搭建的个人空间放到服务器上，用 Nginx 进行转发，顺便再熟悉一下 Linux 下的一些操作，同时会将打包、git 备份、上传服务器等一系列操作自动化
<!--more-->


### 一、 引用第三方库、改动第三方库

　　1、在项目中按实际需求引用第三方库之后，发现有些地方需要改动，这个时候可以去 node_modules 文件夹中的第三方库直接改动

　　2、上述操作不利于后续再次利用改动后的第三方库，同时假如 node_modules 文件夹被清除，或者更换电脑写该项目，则改动不同步


### 二、 git 改动后的第三方库

　　1、想要解决上述的担忧，可以将第三方库改动后的代码放到 git 仓库中，同时在 package.json 文件中引用

　　2、因为原作者的 [wechat-h5-video](https://github.com/tclyjy/wechat-h5-video) 项目是在 GitHub 上，所以我 Fork 了一下这个项目 [https://github.com/liuxy0551/wechat-h5-video](https://github.com/liuxy0551/wechat-h5-video)，
 将 Fork 后的代码在本地 clone 并打开，再将之前改动的代码替换掉 clone 的代码，然后上传到 git 仓库

　　3、在需要引入该第三方库的项目中改动 package.json 文件，将版本号指向 git 仓库的地址，如下图：
    ![](/images/posts/Git-Reference/1.png)



>**注意**
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
