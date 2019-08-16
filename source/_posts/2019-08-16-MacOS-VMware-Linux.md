---
title: Mac OS 在 VMware Fusion 中安装 Cent OS 7.6 版本的虚拟机
urlname: macos-vmware-linux
tags:
  - Mac OS
  - VMware
  - Linux
  - Cent OS
  - Ubuntu
categories:
  - Mac OS
  - VMware
  - Linux
  - Cent OS
  - Ubuntu
author: liuxy0551
copyright: true
date: 2019-08-16 22:59:48
updated: 2019-08-16 22:59:48
---

## 介绍

今天突然想在 Mac OS 上感受一下虚拟机的乐趣。尝试了 VirtualBox（安装夜神模拟器时不知道怎么就同时安装了）、Parallels Desktop、VMware Fusion 之后，发现还是 VMware Fusion 更有以前在 Windows 上使用虚拟机的熟悉感，所以以下内容基于 VMware Fusion。
<!--more-->


### 一、 下载 Linux 镜像

　　1、Cent OS：[https://www.centos.org](https://www.centos.org) [下载页面](https://www.centos.org/download/) 在下载页面选择 DVD  进入镜像选择页面，第一个是华为云上的镜像，我在杭州，所以我选择了第二个浙大的镜像。其实华为云的更快点：[http://mirrors.huaweicloud.com/centos/7.6.1810/isos/x86_64/CentOS-7-x86_64-DVD-1810.iso](http://mirrors.huaweicloud.com/centos/7.6.1810/isos/x86_64/CentOS-7-x86_64-DVD-1810.iso)
    ![](/images/posts/MacOS-VMware-Linux/1.png)

　　2、Ubuntu：[https://ubuntu.com](https://ubuntu.com) 华为云上的多版本镜像地址[http://mirrors.huaweicloud.com/repository/ubuntu-releases/16.04/](http://mirrors.huaweicloud.com/repository/ubuntu-releases/16.04/) 也可以在 [下载页面](https://launchpad.net/ubuntu/+cdmirrors?_ga=2.223681115.1514728070.1565962868-1880279007.1565962868) 滚动到 China 的部分，选择合适的镜像地址


### 二、 几种虚拟机软件给我的感受

　　1、VirtualBox
　　准备再感受一下虚拟机的时候，想起来上次安装夜神模拟器模拟安卓的时候，给我安装了一个 VirtualBox，所以先拿它试一试。但是页面 UI 感觉不是很好看（其实我第一时间想到的就是和 Easy UI 类似的风格） `pass`

　　2、Parallels Desktop
　　同事推荐的，之前也在另一个同事的电脑上感受过安装的 Windows 虚拟机，确实看起来不错，但是我使用虚拟机的过程基本都是依赖 VMware，所以用起来不是很习惯，最后还是用起了 VMware。在网上看到 Parallels Desktop 也可以做安卓模拟器，准备后期更一篇相关的随笔，这个软件先保留在电脑里

　　3、VMware Fusion
　　和我在 Windows 上使用的 VMware Workstation 风格基本一致，新建虚拟机的步骤也差不多，不再赘述，可参考以前的一篇随笔 [在 VMware 中安装 MacOS High Sierra 10.13](https://liuxy0551.github.io/article/vmware-macos.html)。软件需要收费，自行解决


### 三、 安装 Cent OS 7.6

　　1、安装 GNOME 版本，多图
    {% gp 16-2 %}
    ![](/images/posts/MacOS-VMware-Linux/2.png)
    ![](/images/posts/MacOS-VMware-Linux/3.png)
    ![](/images/posts/MacOS-VMware-Linux/4.png)
    ![](/images/posts/MacOS-VMware-Linux/5.png)
    ![](/images/posts/MacOS-VMware-Linux/6.png)
    ![](/images/posts/MacOS-VMware-Linux/7.png)
    ![](/images/posts/MacOS-VMware-Linux/8.png)
    ![](/images/posts/MacOS-VMware-Linux/9.png)
    ![](/images/posts/MacOS-VMware-Linux/10.png)
    ![](/images/posts/MacOS-VMware-Linux/11.png)
    ![](/images/posts/MacOS-VMware-Linux/12.png)
    ![](/images/posts/MacOS-VMware-Linux/13.png)
    ![](/images/posts/MacOS-VMware-Linux/14.png)
    ![](/images/posts/MacOS-VMware-Linux/15.png)
    ![](/images/posts/MacOS-VMware-Linux/16.png)
    ![](/images/posts/MacOS-VMware-Linux/17.png)
    {% endgp %}
