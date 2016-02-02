const cache = require('memory-cache')

module.exports = (key, generator, keyPrefix = '') => {
  return new Promise((resolve, reject) => {
    let cacheKey = `${keyPrefix}${key}`
    let cacheResponse = cache.get(cacheKey)

    if (cacheResponse) {
      resolve(cacheResponse)
    } else {

      Promise.resolve(generator())
      .then((content) => {
        resolve(cache.put(cacheKey, content))
      })
      .catch((error) => {
        reject(error)
      })
    }
  })
}
