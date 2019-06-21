---
title: Git 常用命令（三）—— 日常使用中的 pull 和 push
urlname: git-order-c
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


###  日常使用中的 pull 和 push

　　在日常使用中主要有以下几个指令：

　　1、显示工作目录和暂存区的状态
    ``` javascript
     git status
    ```

　　2、将修改添加到暂存区：
    ``` javascript
     git add -A          提交所有变化
     git add -u          提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
     git add .           提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
    ```

　　3、将更改记录(提交)到存储库：
    ``` javascript
    git commit -m 'commit message'
    ```

　　4、将远程存储库中的更改合并到当前分支中（master 为远程分支名）：
    ``` javascript
    git pull origin master
    ```

　　5、将本地分支的更新推送到远程分支（master 为远程分支名）：
    ``` javascript
    git push origin master
    ```

>**注意**
>* 可经常使用`git status`命令来查看当前状态
