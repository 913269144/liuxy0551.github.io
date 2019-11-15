---
title: 函数的防抖和节流
urlname: function-debounce-throttle
tags:
  - JavaScript
categories:
  - JavaScript
author: liuxy0551
copyright: true
date: 2019-11-12 21:23:22
updated: 2019-11-12 21:23:22
---

## 介绍

　　最近在加强 JavaScript 基础的学习，这里整理一下函数的防抖（debounce）和节流（throttle）。
<!--more-->

| 类型 | 概念 | 应用 |
| :---: | --- | --- |
| 防抖 | 触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间 | scroll、resize 事件在 n 秒内触发多次 |
| 节流 | 如果在 n 秒内连续触发事件，函数只执行一次 | scroll、resize 事件触发完成后 n 秒之后才能再次触发 |


### 一、防抖 - debounce

非立即执行版：触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
立即执行版：触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

``` javascript
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表示立即执行，false 表示非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout

  return function() {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, wait)
    }
  }
}
```


### 二、节流 - throttle
``` javascript
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表示时间戳版，2 表示定时器版
 */
function throttle(func, wait, type) {
  if (type === 1) {
    let previous = 0
  } else if (type === 2) {
    let timeout
  }
  
  return function() {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if ( type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}
```


### 三、参考资料

1、[函数防抖和节流](https://www.jianshu.com/p/c8b86b09daf0)
2、[JavaScript专题之跟着 underscore 学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
3、[JavaScript专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)
