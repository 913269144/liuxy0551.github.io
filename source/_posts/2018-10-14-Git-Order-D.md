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


###  一、合并 develop 分支到 master 分支

　　项目开发中将自己的代码提交到 develop 分支后，发布前需要将 develop 分支的代码合并到 master 分支：

　　1、在 develop 分支提交代码后，切换到 master 分支：
    ``` shell
    git checkout master
    ```

　　2、更新代码：
    ``` shell
    git pull origin master
    ```

　　3、merge 代码：
    ``` shell
    git merge develop
    ```

　　4、提交代码：
    ``` shell
    git push origin master
    ```


###  二、分支管理

　　在 git 中，因为创建、合并和删除分支非常快，所以 git 鼓励使用分支完成任务，合并后再删除分支，这和直接在 master 分支上工作效果是一样的，但是过程更加安全。
通常合并分支时，如果可以的话，git 会用`Fast forward`模式，但这种模式下，删除分支后会丢失分支信息。如果想要看出分支信息，可以强制禁用`Fast forward`模式，git 就会在 merge 时生成一个新的 commit。

　　1、切换到 master 分支：
    ``` shell
    git checkout master
    ```
    
　　2、拉取代码：
    ``` shell
    git pull origin master
    ```

　　3、合并 develop 分支，请注意`--no-ff`参数，表示禁用`Fast forward`模式：
    ``` shell
    git merge --no-ff -m 'merge develop with no-ff' develop
    ```
　　因为本次合并要创建一个新的 commit，所以加上 -m 参数，把 commit 描述写进去。合并后，可以使用`git log`查看分支历史。
    ``` shell
    $ git log
    
    *   e1e9c68 (HEAD -> master) merge with no-ff
    |\  
    | * f52c633 (dev) add merge
    |/  
    *   cf810e4 conflict fixed
    ...
    ```
