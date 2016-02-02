const cache = require('memory-cache')
const chai = require('chai')
const expect = chai.expect
const memoize = require('../index')

describe('memoize()', () => {
  const generatorSuccess = () => {
    return new Promise((resolve, reject) => {
      resolve('test')
    })
  }

  const generatorFail = () => {
    return new Promise((resolve, reject) => {
      reject('error')
    })
  }

  beforeEach(() => {
    cache.clear()
  })

  it('should return a memoized promise value', () => {
    memoize('mykey', generatorSuccess).then((value) => {
      expect(value).to.be('test')
    })
  })

  it('should add a prefix to the key', () => {
    memoize('mykey', generatorSuccess, 'prefix_').then((value) => {
      expect(cache.keys()[0]).to.be('prefix_mykey')
    })
  })

  it('should return reject value', () => {
    memoize('mykey', generatorFail).catch((error) => {
      expect(error).to.be('error')
    })
  })
})
