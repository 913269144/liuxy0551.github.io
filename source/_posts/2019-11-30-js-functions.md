---
title: JavaScript 中常见的一些方法
urlname: js-functions
tags:
  - JavaScript
categories:
  - JavaScript
author: liuxy0551
copyright: true
date: 2019-11-30 13:43:38
updated: 2019-11-30 13:43:38
---

## 介绍

　　最近在加强 JavaScript 基础的学习，这里整理了一下 JavaScript 中 String 对象和 Array 对象常见的一些方法。
<!--more-->


### 一、String 对象

#### 1、[indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

　　`indexOf()`方法返回调用它的 String 对象中`第一次`出现的指定值的索引，从 fromIndex 处进行搜索，如果未找到该值，则返回 -1。

``` javascript
str.indexOf(searchValue)
str.indexOf(searchValue, fromIndex)
```

#### 2、[includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

　　`includes()`方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。`区分大小写`

``` javascript
str.includes(searchString)
str.includes(searchString, fromIndex)
```

#### 3、[replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

　　`replace()`方法用于替换字符串中的某些字符，返回值是一个部分或全部匹配由替代模式所取代的新的字符串。

　　`语法：`
``` javascript
str.replace(regexp|substr, newSubStr|function)
```
- regexp（pattern）：一个RegExp 对象或者其字面量，该正则所匹配的内容`全部都会被第二个参数的返回值替换`。
- substr（pattern）：一个将被 newSubStr 替换的字符串，`仅第一个匹配项会被替换`。
- newSubStr（replacement）：用于替换掉第一个参数在原字符串中匹配到的字符串。
- function（replacement）：一个用来创建新字符串的函数，该函数的返回值将替换第一个参数匹配到的字符串。

　　`举例：`
``` javascript
let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
let regex = /dog/gi

console.log(p.replace(regex, 'ferret'))     // "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log(p.replace('dog', 'monkey'))     // "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

#### 4、[slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

　　`slice()`方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

``` javascript
str.slice(beginIndex)
str.slice(beginIndex, endIndex)
```

#### 5、[split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

　　`split()`方法使用指定的字符串将一个 String 对象分割成字符串数组，这个指定的字符串作为分隔符来决定每个拆分的位置，返回源字符串以分隔符出现位置分隔而成的一个数组。 

``` javascript
str.split(separator)
str.split(separator, limit)
```
- separator：分隔符，可以是一个字符串或者正则表达式
- limit：返回值数组的长度

#### 6、[substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

　　`substr()`方法返回一个字符串中从指定位置开始到指定字符数的字符。 

``` javascript
str.substr(beginIndex)
str.substr(beginIndex, length)
```
>**注意**
>* **建议使用 substring()**

#### 7、[substring()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

　　`substring()`方法返回一个字符串从开始索引直到字符串末尾的一个子集, 或从开始索引到结束索引（不包含结束索引）之间的一个子集。

``` javascript
str.substring(beginIndex)
str.substring(beginIndex, endIndex)        // [beginIndex, endIndex)
```


### 二、Array 对象

#### 1、[isArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

　　`Array.isArray()`用于确定传递的值是否是一个 Array。

``` javascript
Array.isArray([1, 2, 3])            // true
Array.isArray({ foo: 123 })         // false
Array.isArray("foobar")             // false
Array.isArray(undefined)            // false
```
- 当检测Array实例时, Array.isArray 优于 instanceof，因为 Array.isArray 能检测 iframes。

#### 2、[concat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

　　`concat()`方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

``` javascript
arr1.concat(arr2, arr3, ...)
```

#### 3、[every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

　　`every()`方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

``` javascript
let arr1 = [12, 5, 8, 130, 44]
let arr2 = [12, 54, 18, 130, 44]
let arr3 = [12, 54, 18, 130, 44]

arr1.every(i => i >= 10)            // false
arr2.every(i => i >= 10)            // true
arr3.every((i, index, array) => { return i >= 20 })            // false
```
>**注意**
>* **1、若收到一个空数组，此方法在任何情况下都会返回 true**
>* **2、可接收第二个参数，执行第一个函数时的 this**

#### 4、[filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

　　`filter()`方法创建一个新数组, 包含了通过测试函数的所有元素。

``` javascript
let arr1 = [12, 5, 8, 130, 44]
let arr2 = [12, 54, 18, 130, 44]

arr1.filter(i => i >= 10)            // [12, 130, 44]
arr2.filter((i, index, array) => i >= 10)            // [12, 130, 44]
```
>**注意**
>* **可接收第二个参数，执行第一个函数时的 this**

#### 5、[flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

　　`flat()`方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

``` javascript
let arr1 = [1, 2, [3, 4]]
arr1.flat()             // [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]]
arr2.flat()             // [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]]
arr3.flat(2)            // [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
arr4.flat(Infinity)     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr5 = [1, 2, , 4, 5]
arr4.flat()             // [1, 2, 4, 5]
```

#### 6、[forEach()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

　　`forEach()`方法对数组的每个元素执行一次提供的函数。

>**注意**
>* **无法跳出循环**

#### 7、[includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

　　`includes()`方法用来判断一个数组是否包含一个指定的值，包含则返回 true，反之返回 false。

#### 8、[indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

　　`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 -1。

#### 9、[join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

　　`join()`方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

#### 10、[map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

　　`map()`方法创建一个新数组，其结果是该数组中的每个元素都调用执行函数后返回的结果。

#### 11、[pop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

　　`pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

#### 12、[push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

　　`push()`方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。此方法更改数组的长度。

#### 13、[shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

　　`shift()`方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

#### 14、[unshift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

　　`unshift()`方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。此方法更改数组的长度。

#### 15、[slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

　　`slice()`方法返回一个新的数组对象，这一数组对象是由 beginIndex 和 endIndex 决定的原数组的浅拷贝。原始数组不会被改变。

``` javascript
arr.slice()
arr.slice(beginIndex)
arr.slice(beginIndex, endIndex)        // [beginIndex, endIndex)
```
- 如果 beginIndex 大于数组的长度，则返回空数组
- slice(-2) 表示提取数组中的倒数第二个元素到最后一个元素（包含最后一个元素）
- slice(-2, -1) 表示提取数组中的倒数第二个元素到最后一个元素（不包含最后一个元素）

#### 16、[some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

　　`some()`方法测试数组中是不是至少有一个元素通过了测试函数，返回一个 Boolean 类型的值。

>**注意**
>* **1、若收到一个空数组，此方法在任何情况下都会返回 false**
>* **2、可接收第二个参数，执行第一个函数时的 this**

#### 17、[splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

　　`splice()`方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

``` javascript
arr.splice(beginIndex, deleteCount, item1, item2, ...)
```

#### 18、[reverse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

　　`reverse()`方法将数组中元素的位置颠倒，并返回该数组。此方法会改变原数组。
