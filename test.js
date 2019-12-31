const {
  table,
  padding,
  charForIndex,
  indexForChar,
  containsChar,
  charString
} = require('./base64')

const errors = []

function runTest(title, actual, expected, whenFails) {
  const ok = actual === expected
  process.stdout.write(ok ? '√' : 'ƒ')
  !ok && errors.push('FAIL: ' + title + ' ' + whenFails)
}

function tests() {
  runTest('table', Array.isArray(table), true, 'table should be an array')
  runTest('table', table.length, 64, 'table should contain 64 items')
  runTest('padding', padding, '=', 'paddng is always =')
  runTest('charForIndex', typeof charForIndex, 'function', 'charForIndex should be a function')
  runTest('indexForChar', typeof indexForChar, 'function', 'indexForChar should be a function')
  runTest('containsChar', typeof containsChar, 'function', 'containsChar should be a function')
  runTest('charString', typeof charString, 'function', 'charString should be a function')
  runTest('charString', typeof charString(), 'string', 'charString() should return a string')
  runTest('charString', charString(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', 'charString() should return known value')
  console.log('\nDONE!')
  errors.length > 0 && console.log(errors)
}

tests()
