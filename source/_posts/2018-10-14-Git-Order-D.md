---
title: Git 常用命令（四）—— 合并 develop 分支到 master 分支
urlname: git-order-d
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2018-10-14 18:12:22
updated: 2019-06-21 08:26:22
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->


###  合并 develop 分支到 master 分支

　　项目开发中将自己的代码提交到 develop 分支后，为了发布，需要将 develop 分支的代码合并到 master 分支：

　　1、在 develop 分支提交代码后，切换到 master 分支：
    ``` javascript
    git checkout master
    ```

　　2、更新代码：
    ``` javascript
    git pull origin master
    ```

　　3、merge 代码：
    ``` javascript
    git merge develop
    ```

　　4、提交代码：
    ``` javascript
    git push origin master
    ```
