A simple cached memoize for promises.

### Usage
```
npm install memoize-promise-value
```

```javascript
const memoize = require('memoize-promise-value')

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
```bash
npm run watch
# or
npm run build
# please test it
npm test
```
