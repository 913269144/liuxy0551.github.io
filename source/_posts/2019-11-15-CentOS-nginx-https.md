---
title: 使用 certbot 在 CentOS 中给 nginx 配置 https
urlname: centos-nginx-https
tags:
  - 服务器
categories:
  - 服务器
author: liuxy0551
copyright: true
date: 2019-11-15 17:08:08
updated: 2019-11-15 17:08:08
---

## 介绍

　　免费的 SSL 证书可以通过阿里云获取，也可以通过以下操作安装。这里只记录使用 certbot 在 CentOS 中给 nginx 配置 https：
<!--more-->


### 一、操作步骤

　　先去 Certbot 官网 [https://certbot.eff.org/](https://certbot.eff.org/)，选择 nginx ，再选择 CentOS/RHEL 7，意思是在什么系统上使用什么 HTTP 服务器

![](/images/posts/centos-nginx-https/1.png)

#### 1、查看服务器实例
``` shell
cat /sys/devices/virtual/dmi/id/product_uuid
```
　　如果没有 dmi 文件夹，就进行安装：
``` shell
sudo yum -y install dmidecode 
```
　　如果 UUID 是`ec2`开头，则需要运行以下两行指令：
``` shell
sudo yum -y install yum-utils
sudo yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional
```

#### 2、安装 Certbot
``` shell
sudo yum install -y certbot python2-certbot-nginx
```

#### 3、获取并安装 SSL 证书
``` shell
sudo certbot --nginx
```
　　![](/images/posts/centos-nginx-https/2.png)出现报错，参考资料：[Certbot :ImportError: No module named 'requests.packages.urllib3](https://stackoverflow.com/questions/46168364/certbot-importerror-no-module-named-requests-packages-urllib3)，执行以下指令：
``` shell
sudo pip install --upgrade --force-reinstall 'requests==2.6.0' urllib3
```
　　![](/images/posts/centos-nginx-https/3.png)提示输入以下指令升级`pip`，可以不搭理。
``` shell
sudo pip install --upgrade pip
```
　　接下来重新运行`sudo certbot --nginx`：
``` shell
sudo certbot --nginx
```





-----------------------------------


#### 4、设置自动续订
``` shell
sudo certbot --nginx
```

#### 5、确定 Certbot 正常运行 

　　在浏览器输入域名，在 URL 栏确认是否有 🔒 图标
