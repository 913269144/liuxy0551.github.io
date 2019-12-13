---
title: Git 常用命令（五）—— 删除本地、远程分支，覆盖远程仓库内容
urlname: git-order-e
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2018-10-15 18:12:22
updated: 2019-12-13 12:23:28
---

## 介绍

　　git 常用命令系列随笔会记录一些用到的常见命令，这里记录一下`删除本地、远程分支，覆盖远程仓库内容`：
<!--more-->


### 一、删除本地、远程分支

　　每次操作后可执行`git branch -a`查看分支情况：

　　1、删除本地分支 dev：
    ``` shell
    git branch -d dev
    ```
　　如果报错：error: The branch 'dev01' is not fully merged，可使用`git branch -D dev`

　　2、删除远程分支 dev：
    ``` shell
    git push origin --delete dev
    ```


### 二、撤销 commit

　　`~`后可以跟数字，代表撤销几个 commit：
    ``` shell
    git reset HEAD~
    ```


### 三、覆盖已经 push 到线上仓库的内容`谨慎`

　　偶尔需要在测试服务器多次测试效果，将代码提交到 develop 分支然后通过 Jenkins 打包发布到测试环境，但是这些进行测试的 commit 不太好看，记录一下覆盖的操作：

``` shell
git reset HEAD~2
git add .
git commit -m 'commit message'
git push -f origin develop
```

>**注意**
>* **`-f`在多人协作时出现是可能会被其他人砍死的**
