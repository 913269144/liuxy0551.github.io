---
title: Git 常用命令（五）—— 删除本地分支、远程分支，删除本地已经 commit 的内容
urlname: git-order-e
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2018-10-15 18:12:22
updated: 2019-06-21 08:26:22
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->



### 一、删除本地分支、远程分支

　　项目的远程仓库备份分支重复，需要删除其中一个，每次操作后可执行`git branch -a`查看分支情况：

　　1、查看分支：
    ``` javascript
    git branch -a
    ```

　　2、删除本地分支 dev01：
    ``` javascript
    git branch -d dev01
    ```
　　如果报错：error: The branch 'dev01' is not fully merged，可使用`git branch -D dev01`

　　3、删除远程分支 dev01：
    ``` 
    git push origin --delete dev01
    ```



### 二、删除本地已经 commit 的内容

　　一顿操作猛如虎，各种`git add .`，各种`git commit -m 'test'`，最后一看，还在 master 分支上呢，太吓人了，这咋办？撤销本地已经 commit 的内容：
    ``` javascript
    git reset HEAD~
    ```
　　然后再 revert 这些代码就可以啦。
