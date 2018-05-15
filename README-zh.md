# Promise-unified
[![Node Version](https://img.shields.io/badge/node.js-%3E=_6-green.svg)](https://travis-ci.org/BlackHole1/promise-unified)
[![Build Status](https://travis-ci.org/BlackHole1/promise-unified.svg?branch=master)](https://travis-ci.org/BlackHole1/promise-unified)
[![Coverage Status](https://coveralls.io/repos/github/BlackHole1/promise-unified/badge.svg?branch=master)](https://coveralls.io/github/BlackHole1/promise-unified?branch=master)
[![Npm Downlaod](https://img.shields.io/npm/dy/promise-unified.svg)](https://www.npmjs.com/package/promise-unified)

[![NPM](https://nodei.co/npm/promise-unified.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/promise-unified/)

[English description](https://github.com/BlackHole1/promise-unified/README.md)

> 为Promise添加一个统一的操作方法

`Promise`缺乏统一的操作方法，所以为它添加了统一的操作方法。

**请注意: 这个库是直接修改`Promise`的原型链**

## 安装

``` bash
# 使用npm安装
$ npm install Promise-unified --save

# 使用yarn安装
$ yarn add Promise-unified

# 使用bower安装
$ bower install Promise-unified --save
```

## 使用

```javascript
require('promise-unified')

let promise = new Promise(function(resolve, reject) {
  if (false){
    setTimeout(() => resolve('success'), 1000)
  } else {
    setTimeout(() => reject('error'), 1000)
  }
})

promise.unified((state, data) => {
  const msg = state ? 'operation successful' : 'operation failed'
  console.log(
    state,
    data,
    msg
  ) // => false, error, operation failed
})
```

如果您不想使用此库，也可以使用以下方法：

```javascript
promise.then(
  data => ({state: true, data}),
  data => ({state: false, data}),
).then(({state, data}) => {
  const msg = state ? 'operation successful' : 'operation failed'
  console.log(
    state,
    data,
    msg
  )
})
```

## 贡献者名单

| **提交次数** | **贡献者** | 
| --- | --- |
| 5 | [Black-Hole](https://github.com/BlackHole1) |

## 作者

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)