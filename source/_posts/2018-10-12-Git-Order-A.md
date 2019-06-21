---
title: Git 常用命令（一）—— 将本地的项目与线上项目关联
urlname: git-order-a
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2018-10-12 18:12:22
updated: 2019-06-21 08:26:22
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->


###  将本地的项目与线上项目关联

　　这一部分主要作用是将本地项目备份到线上，达到多端操作的目的。以 Github 举例：

　　1、新建 repository
　　在 Github 下创建一个新的 repository，取名为 test（与本地欲上传的项目文件夹同名即可）创建的时候不要勾选创建`README.md`，否则后面会有小问题。

　　2、创建本地仓库
　　进入本地文件夹路径，执行以下命令创建本地仓库：
    ``` javascript
     git init
    ```
　　
　　3、修改 .gitignore 文件
　　如果没有请手动创建一个，在里面加入忽略更新的内容，加快push速度，如`.idea`、`node_modules`等。

　　4、提交代码/文件
　　执行以下命令，完成代码/文件在本地的提交：
    ``` javascript
     git add .
     git commit -m 'commit message'
    ```
    
　　5、设置远程仓库
    ``` javascript
    git remote add origin https://github.com/liuxy0551/test.git
    ```
　　如果出现问题：`fatal: remote origin already exists`，提示 origin 已存在，执行`git remote rm origin`删除重复第 5 步即可
　　![](/images/posts/git-order/1.png)

　　6、更新远程仓库
　　如果远程仓库不为空，可执行`git pull --rebase origin master`先将远程仓库合并到本地。远程仓库为空可直接执行以下命令：
    ``` javascript
    git push -u origin master
    ```
