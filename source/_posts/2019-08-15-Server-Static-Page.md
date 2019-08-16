---
title: 将个人空间放到服务器上
urlname: server-static-page
tags:
  - Server
  - Linux
categories:
  - Server
  - Linux
author: liuxy0551
hide: false
copyright: true
date: 2019-08-15 17:23:45
updated: 2019-08-15 17:23:45
---

## 介绍

最近拿到一个服务器，尝试着把基于 Hexo 搭建的个人空间放到服务器上，用 Nginx 进行转发，顺便再熟悉一下 Linux 下的一些操作，同时会将部署、git 备份、上传服务器等一系列操作自动化
<!--more-->


### 一、 虚拟机练手

　　1、我根据网上的教程在服务器上部署后，个人站的打开速度提升了很多，借用同事的一句话：5M 带宽的服务器放你一个静态资源怎么会慢？

　　2、实现目标后就想着总结一下过程，故在虚拟机上再试一次，同时也是感受一下 Mac OS 系统中虚拟机的玩法

　　3、我以前在 Windows 上玩的虚拟机是 VMware，这次在 Mac OS 上安装的是 VMware Fusion，基本上新建虚拟机的步骤都差不多，不再赘述，可参考以前的一篇随笔 [在 VMware 中安装 MacOS High Sierra 10.13](https://liuxy0551.github.io/article/vmware-macos.html)

　　4、我目前选用的是和服务器一样的 Cent OS


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
