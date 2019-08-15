---
title: Git 常用命令（二）—— clone 项目到本地
urlname: git-order-b
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



###  clone 项目到本地

　　1、在目的文件夹路径下，输入以下命令进行初始化：
    ``` javascript
    git init
    ```

　　2、两种 clone 操作

　　（1）输入以下命令，就会进入主分支。其中 git clone 后的内容为你要下载的项目地址：
    ``` javascript
    git clone https://github.com/liuxy0551/ssm-crud
    ```

　　（2）clone 指定分支，就会进入指定分支。输入以下命令：
    ``` javascript
     git clone -b develop https://github.com/haobin12358/Weidian
    ```
    
　　格式为：git clone -b 分支名 git地址，其中 develop 为分支名


　　3、本地分支和远程分支

   命令|说明
    :--------|:--------
    git branch -a|查看所有分支列表，包括本地和远程
    git checkout dev|切换分支 dev
    git checkout -b dev|本地创建 dev 分支，同时切换到 dev 分支。只有提交的时候才会在服务端上创建一个分支
