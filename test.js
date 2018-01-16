require('./')
const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha
describe('promise unified test', () => {
  it('When Promise state is resolve, should return to true', () => {
    const promise = Promise.resolve('success')
    return promise.unified((state, data) => {
      assert.equal(state, true)
      assert.equal(data, 'success')
    })
  })
  it('When Promise state is reject, should return to false', () => {
    /* eslint-disable prefer-promise-reject-errors */
    const promise = Promise.reject('error')
    /* eslint-enable */
    return promise.unified((state, data) => {
      assert.equal(state, false)
      assert.equal(data, 'error')
    })
  })
})
