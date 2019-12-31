const {
  padding,
  table,
  charForIndex,
  indexForChar,
  containsChar,
  charString,
  isInValidIndexRange,
  validIndexRange,
  binaryForChar
} = require('./base64')

const errors = []
let count = 0

function runTest (title, actual, expected, whenFails) {
  count++
  const ok = actual === expected
  process.stdout.write(ok ? '√' : 'ƒ')
  !ok && errors.push('FAIL: ' + title + ' ' + whenFails)
}

function tests () {
  runTest('table', Array.isArray(table), true, 'table should be an array')
  runTest('table', table.length, 64, 'table should contain 64 items')
  runTest('padding', padding, '=', 'paddng is always =')

  runTest('charForIndex', typeof charForIndex, 'function', 'charForIndex should be a function')
  runTest('charForIndex', charForIndex(1), 'B', 'charForIndex(1) should return "B"')
  runTest('charForIndex', charForIndex(-1), '', 'charForIndex(-1) should return ""')
  runTest('charForIndex', charForIndex(64), '', 'charForIndex(64) should return ""')

  runTest('indexForChar', typeof indexForChar, 'function', 'indexForChar should be a function')
  runTest('containsChar', typeof containsChar, 'function', 'containsChar should be a function')
  runTest('charString', typeof charString, 'function', 'charString should be a function')
  runTest('charString', typeof charString(), 'string', 'charString() should return a string')
  runTest('charString', charString(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', 'charString() should return known value')

  runTest('isInValidIndexRange', typeof isInValidIndexRange, 'function', 'isInValidIndexRange should be a function')
  runTest('isInValidIndexRange', isInValidIndexRange(-1), false, 'isInValidIndexRange(-1) should be false')
  runTest('isInValidIndexRange', isInValidIndexRange(1), true, 'isInValidIndexRange(1) should be true')
  runTest('isInValidIndexRange', isInValidIndexRange(63), true, 'isInValidIndexRange(63) should be true')
  runTest('isInValidIndexRange', isInValidIndexRange(64), false, 'isInValidIndexRange(64) should be false')

  runTest('validIndexRange', typeof validIndexRange, 'function', 'validIndexRange should be a function')
  runTest('validIndexRange', Array.isArray(validIndexRange()), true, 'validIndexRange() should return an array')
  runTest('validIndexRange', validIndexRange().every(i => typeof i === 'function'), true, 'validIndexRange() should return an array of functions')

  runTest('binaryForChar', typeof binaryForChar, 'function', 'binaryForChar is a function')
  runTest('binaryForChar', binaryForChar('A'), '000000', 'binaryForChar(A) should be 000000')
  runTest('binaryForChar', binaryForChar('√'), -1, 'binaryForChar(√) should be -1')

  console.log('\nDONE!')
  console.log(`Ran ${count} tests!`)
  errors.length > 0 && console.log(errors)
}

tests()
