const unified = () => {
  const self = typeof window === 'undefined' ? global : window
  /* istanbul ignore next */
  if (!self.Promise) {
    return new Error('Your current environment does not support Promise')
  }
  /* eslint-disable no-extend-native */
  /* eslint-disable standard/no-callback-literal */
  /**
   * @param {Function} callback Incoming state and data variables
   */
  Promise.prototype.unified = function (callback) {
    this.then(
      data => callback(true, data),
      data => callback(false, data)
    )
  }
  /* eslint-enable */
}

module.expose = unified()
