---
title: Git 常用命令（八）—— 合并分支
urlname: git-order-h
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2019-12-09 11:11:02
updated: 2019-12-09 11:11:02
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
　　我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->


###  分支管理

　　在 git 中，因为创建、合并和删除分支非常快，所以 git 鼓励使用分支完成某个任务，合并后再删除分支，这和直接在 master 分支上工作效果是一样的，但是过程更加安全。

　　通常合并分支时，如果可以的话，git 会用`Fast forward`模式，但这种模式下，删除分支后会丢失分支信息。如果想要看出分支信息，可以强制禁用`Fast forward`模式，git 就会在 merge 时生成一个新的 commit。

　　1、切换到 master 分支：
    ``` shenll
    git checkout master
    ```
    
　　2、拉取代码：
    ``` shenll
    git pull origin master
    ```

　　3、合并 develop 分支，请注意`--no-ff`参数，表示禁用`Fast forward`模式：
    ``` shenll
    git merge --no-ff -m 'merge develop with no-ff' develop
    ```
　　因为本次合并要创建一个新的 commit，所以加上 -m 参数，把 commit 描述写进去。合并后，可以使用`git log`查看分支历史。
    ``` shenll
    $ git log
    
    *   e1e9c68 (HEAD -> master) merge with no-ff
    |\  
    | * f52c633 (dev) add merge
    |/  
    *   cf810e4 conflict fixed
    ...
    ```
