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
updated: 2019-11-05 09:52:45
---

## 介绍

最近拿到一个服务器，尝试着把基于 Hexo 搭建的个人空间放到服务器上，用 Nginx 进行转发，顺便再熟悉一下 Linux 下的一些操作，同时会将部署、git 备份、上传服务器等一系列操作自动化。
<!--more-->


### 一、 虚拟机练手

　　1、我根据网上的教程在服务器上部署后，个人站的打开速度提升了很多，借用同事的一句话：5M 带宽的服务器放你一个静态资源怎么会慢？

　　2、实现目标后就想着总结一下过程，故在虚拟机上再试一次，同时也是感受一下 Mac OS 系统中虚拟机的玩法

　　3、我以前在 Windows 上玩的虚拟机是 VMware，这次在 Mac OS 上安装的是 VMware Fusion，基本上新建虚拟机的步骤都差不多，不再赘述，可参考以前的一篇随笔 [在 VMware 中安装 MacOS High Sierra 10.13](https://liuxy0551.github.io/article/vmware-macos.html)

　　4、我目前选用的是和服务器一样的 Cent OS，具体操作步骤和 [将个人空间放到服务器上 - 服务器实践](http://liuxy0551.whhasa.com/article/server-static-page.html#%E4%BA%8C-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%9E%E8%B7%B5)


### 二、 服务器实践

　　1、服务器的基础环境准备可参考 [Cent OS 基础环境搭建](http://liuxy0551.whhasa.com/article/cent-os-base.html)，包括安装 git、Nginx 配置、创建 deploy 用户等

　　1、服务器的基础环境准备可参考 [Cent OS 基础环境搭建](http://liuxy0551.whhasa.com/article/cent-os-base.html)

　　2、














>**注意**
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
>* **使用范围**：仅用作个人项目代码练习，侵权必删，其他第三方仓库同理
