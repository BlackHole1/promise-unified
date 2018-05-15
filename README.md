# Promise-unified
[![Node Version](https://img.shields.io/badge/node.js-%3E=_6-green.svg)](https://travis-ci.org/BlackHole1/promise-unified)
[![Build Status](https://travis-ci.org/BlackHole1/promise-unified.svg?branch=master)](https://travis-ci.org/BlackHole1/promise-unified)
[![Coverage Status](https://coveralls.io/repos/github/BlackHole1/promise-unified/badge.svg?branch=master)](https://coveralls.io/github/BlackHole1/promise-unified?branch=master)
[![Npm Downlaod](https://img.shields.io/npm/dy/promise-unified.svg)](https://www.npmjs.com/package/promise-unified)

[![NPM](https://nodei.co/npm/promise-unified.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/promise-unified/)

[中文说明](https://github.com/BlackHole1/promise-unified/blob/master/README-zh.md)

> Add a unified operation for Promise

`Promise` lacks an unified operation method, so I add a unified method of operation for it

**Attention please: This library is a prototype chain that directly modifies the `Promise`**

## install

``` bash
# Install with npm
$ npm install Promise-unified --save

# Install with yarn
$ yarn add Promise-unified

# Install with bower
$ bower install Promise-unified --save
```

## Usage

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

If you do not want to use this library, you can also use the following method:

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

## Contributing

| **Commits** | **Contributor** | 
| --- | --- |
| 5 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)