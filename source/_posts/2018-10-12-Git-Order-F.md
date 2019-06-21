---
title: Git 常用命令（六）—— 从 GitHub 远程仓库中删除文件夹或文件
urlname: git-order-f
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


###  从 GitHub 远程仓库中删除文件夹或文件

　　在上传项目到 github 时，忘记忽略了某个文件夹，如：.idea，接着就直接 push 上去了，最后意识到了此问题，决定删除掉远程仓库中的 .idea 文件夹

　　1、拉取代码：
    ``` javascript
    git pull origin master
    ```

　　2、删除 .idea 文件夹：
    ``` javascript
    git rm -r --cached .idea
    ```
    
　　3、将更改记录(提交)到存储库：
    ```
    git commit -m 'delete .idea'
    ```

　　4、提交代码：
    ```
    git push origin master
    ```
    
　　或者强制覆盖：
    ```
    git push -u origin master
    ```
　　本地项目中的 .idea 文件夹不收操作影响，删除的只是远程仓库中的 .idea，可放心删除
