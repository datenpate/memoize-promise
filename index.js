'use strict';

var cache = require('memory-cache');

module.exports = function (key, generator) {
  var keyPrefix = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

  return new Promise(function (resolve, reject) {
    var cacheKey = '' + keyPrefix + key;
    var cacheResponse = cache.get(cacheKey);

    if (cacheResponse) {
      resolve(cacheResponse);
    } else {

      Promise.resolve(generator()).then(function (content) {
        resolve(cache.put(cacheKey, content));
      }).catch(function (error) {
        reject(error);
      });
    }
  });
};
