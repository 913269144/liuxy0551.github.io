---
title: Git 常用命令（七）—— 撤销、追加本地的 commit
urlname: git-order-g
tags:
  - git
categories:
  - git
author: liuxy0551
copyright: true
date: 2019-08-29 16:21:22
updated: 2019-09-05 20:43:30
---

## 介绍

　　实习阶段代码同步使用的是 SVN ，工作之后一直在使用 Git 搭配 github、gitlab、gitee 等进行代码同步工作，用起来也还顺手。
我之前主要是通过 WebStorm 的 git 插件来提交和同步代码，偶尔会使用到命令，这个系列会记录一些用到的常见命令。
<!--more-->


###  一、撤销本地的 commit

　　1、在开发中，本地 commit 代码还没 push 的时候，突然想在刚刚那个 commit 的基础上再改点代码，可以执行以下代码将刚刚的 commit 撤销：
    ``` javascript
    git reset HEAD~
    ```

###  二、追加本地的 commit

　　在开发中，写了一部分代码后，临时需要去写其他部分的代码，可以先将当前代码先进行 commit，不要 push，避免线上仓库出现多次 commit 记录。写新代码，如果新代码满足要求，则可以将新代码追加到上一个 commit，执行上述 1、2 的指令，然后：
    ```
    git commit --amend
    ```
