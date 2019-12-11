---
title: Git 常用命令（七）—— Bug 分支
urlname: git-order-g
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2018-10-17 21:02:46
updated: 2019-07-11 20:17:32
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->


###  一、git stash

出现 bug 时可以通过一个新的临时分支来修复，修复后合并分支，然后将这个临时分支删除。
在 develop 分支上开发的正嗨的时候，突然发现 master 分支上出现了一个 bug，这个时候很自然地想创建一个临时分支 issue01 来修复 bug，但是 develop 分支上的
代码还没有提交。并不是不想提交，而是没开发完成，还没法提交。但是线上 bug 刻不容缓。这个时候`git stash`就可以登场了：

　　1、暂存代码：
    ``` shell
    git stash
    ```

　　2、切到 master 分支、创建临时分支：
    ``` shell
    git checkout master
    git checkout -b issue01
    ```

　　3、修复后提交，切回 master 分支：
    ``` shell
    git add .
    git commit -m 'fix: bug issue01'
    git checkout master
    ```

　　4、合并并删除临时分支：
    ``` shell
    git merge --no-ff -m 'merge issue01 fix bug' issue01
    git branch -d issue01
    ```

　　两分钟搞定，bug 修复完成了，可以去 develop 分支干活了。

　　5、恢复暂存的代码，`git stash pop`恢复代码的同时也会把暂存的内容也删了：
    ``` shell
    git checkout develop
    git stash list
    git stash pop stash@{0}
    ```


###  二、git cherry-pick

在 master 分支上修复了 bug 后，仔细回忆一下，master 的代码是之前从 develop 分支上合并过去的，所以这个 bug 在 develop 分支上也存在。
那在 develop 分支上怎么修复这个 bug 呢？Ctrl C、Ctrl V 再操作一次，提交就可以了？
实际上这样操作也可以，但是如果 bug 修复涉及到的文件很多时，这样就有点不优雅了，`cherry-pick`命令可以很优雅地解决这个问题。

同样的 bug，要在 develop 上修复，只需要把`ad52dcf fix: bug issue01`这个提交所做的修改`复制`到 develop 分支。注意：这里只想
复制`ad52dcf fix: bug issue01`这个提交的内容到 develop 分支，而不是要把 master 分支整个 merge 过来。

``` shell
git cherry-pick ad52dcf
git push origin develop
```
git 自动给 develop 分支做了一次提交，这次提交不同于 master 分支的`ad52dcf`，因为这两个 commit 只是改动相同，但属于两个不同的 commit。
用`git cherry-pick`，我们就不需要在 develop 分支上手动再把修复 bug 的过程重复一遍。
