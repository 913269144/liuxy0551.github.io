---
title: 将 Hexo 个人空间放到服务器上
urlname: hexo-server
tags:
  - 服务器
  - Linux
categories:
  - 服务器
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

　　4、我目前选用的是和服务器一样的 Cent OS，具体操作步骤参考 [服务器实践](http://liuxy0551.whhasa.com/article/hexo-server.html#%E4%BA%8C-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%9E%E8%B7%B5)


### 二、 服务器实践

#### （一）、服务器基础环境搭建

　　1、参考 [Cent OS 基础环境搭建](http://liuxy0551.whhasa.com/article/cent-os-base.html)

#### （二）、Hexo 的部署

　　需要进行的操作：创建 git 用户、添加本机的 SSH 公钥到服务器、安装 git、安装 nginx 并配置等

　　1、创建 git 用户并设置密码，把 git 用户添加到 sudo 用户组中
    ```shell
    vim /etc/passwd
    ```
　　出于安全考虑，刚刚创建的 git 用户不允许 shell 登录，所以将
    ```shell
    git:x:1001:1001:,,,:/home/git:/bin/bash
    ```
　　改为
    ```shell
    git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
    ```
　　然后切换到 git 用户`su git`，添加本机的 SSH 公钥到服务器并且设置相应的读写与执行权限。

　　2、安装 git

　　3、在服务器上新建一个`blog`文件夹，用来存储`hexo d`后的静态文件，并且把该文件夹的权限授权给 git 用户。
    ```shell
    sudo mkdir -p /mnt/projects/hexo-blog/blog
    cd /mnt/projects/hexo-blog
    sudo chown -R git:git blog
    ```

　　4、在`hexo-blog`目录下初始化一个 git 裸库
    ```shell
    sudo git init --bare blog.git
    ```
　　服务器上的 git 仓库一般是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 git 仓库通常都以`.git`结尾。然后把 git 仓库的 owner 改为 git 用户：
    ```shell
    sudo chown -R git:git blog.git
    ```

　　5、新建一个 post-receive 文件
    ```shell
    sudo vim blog.git/hooks/post-receive
    ```
　　然后在该文件中输入以下内容，将分支导出到`blog`文件夹下。
    ```shell
    git --work-tree=/mnt/projects/hexo-blog/blog --git-dir=/mnt/projects/hexo-blog/blog.git checkout -f
    ```
　　保存退出之后，再输入以下代码，赋予该文件可执行文件。
    ```shell
    sudo chmod +x blog.git/hooks/post-receive
    ```
    
　　6、修改博客根目录下的`_config.yml`文件：
    ```shell
    deploy:
      type: git
      repo:
        github: https://github.com/liuxy0551/liuxy0551.github.io.git,master
        coding: https://git.dev.tencent.com/liuxianyu/liuxy0551.coding.me.git,master
        gitee: https://gitee.com/liuxy0551/liuxy0551.git,master
        server: git@47.65.55.62:/mnt/projects/hexo-blog/blog.git,master
    ```
    
　　7、在博客根目录下输入以下命令：
    ```shell
    hexo clean
    hexo g
    hexo d
    ```

　　部署完毕之后在浏览器输入域名就可以看见博客的内容了。
