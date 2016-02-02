A simple cached memoize for promises.

### Usage
```
const memoize = require('promise-memoize')

const generatorPromise = () => {
  return new Promise((resolve) => {
    resolve('myValue')
  })
}

memoize('myKey', generatorPromise, 'optionalKeyPrefix_').then((value) => {
  expect(value).to.be('myValue')
})
```

### Development
```
npm run watch
# or
npm run build
# please test it
npm test
```
