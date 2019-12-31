# base.64.table.node.lib

A node lib to get base64 table in various formats

### installation

```bash
npm i @m1yh3m/base.64.table.node.lib
```

### usage

```javascript
var base64 = require('@m1yh3m/base.64.table.node.lib')


base64.charString()
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'


base64.containsChar('+')
true
base64.containsChar('_')
false
base64.containsChar('/')
true
base64.containsChar('{')
false
base64.containsChar('A')
true
base64.containsChar('!')
false


base64.charForIndex(10)
'K'


base64.containsChar('k')
true


base64.indexForChar('k')
36
base64.indexForChar('K')
10


base64.table
[ { index: 0, binary: 0, char: 'A' },
  { index: 1, binary: 1, char: 'B' },
  { index: 2, binary: 8, char: 'C' },
  { index: 3, binary: 9, char: 'D' },
  { index: 4, binary: 64, char: 'E' },
  { index: 5, binary: 65, char: 'F' },
  { index: 6, binary: 72, char: 'G' },
  { index: 7, binary: 73, char: 'H' },
  { index: 8, binary: 512, char: 'I' },
  { index: 9, binary: 513, char: 'J' },
  { index: 10, binary: 520, char: 'K' },
  { index: 11, binary: 521, char: 'L' },
  { index: 12, binary: 576, char: 'M' },
  { index: 13, binary: 577, char: 'N' },
  { index: 14, binary: 584, char: 'O' },
  { index: 15, binary: 585, char: 'P' },
  { index: 16, binary: 4096, char: 'Q' },
  { index: 17, binary: 4097, char: 'R' },
  { index: 18, binary: 4104, char: 'S' },
  { index: 19, binary: 4105, char: 'T' },
  { index: 20, binary: 4160, char: 'U' },
  { index: 21, binary: 4161, char: 'V' },
  { index: 22, binary: 4168, char: 'W' },
  { index: 23, binary: 4169, char: 'X' },
  { index: 24, binary: 4608, char: 'Y' },
  { index: 25, binary: 4609, char: 'Z' },
  { index: 26, binary: 4616, char: 'a' },
  { index: 27, binary: 4617, char: 'b' },
  { index: 28, binary: 4672, char: 'c' },
  { index: 29, binary: 4673, char: 'd' },
  { index: 30, binary: 4680, char: 'e' },
  { index: 31, binary: 4681, char: 'f' },
  { index: 32, binary: 100000, char: 'g' },
  { index: 33, binary: 100001, char: 'h' },
  { index: 34, binary: 100010, char: 'i' },
  { index: 35, binary: 100011, char: 'j' },
  { index: 36, binary: 100100, char: 'k' },
  { index: 37, binary: 100101, char: 'l' },
  { index: 38, binary: 100110, char: 'm' },
  { index: 39, binary: 100111, char: 'n' },
  { index: 40, binary: 101000, char: 'o' },
  { index: 41, binary: 101001, char: 'p' },
  { index: 42, binary: 101010, char: 'q' },
  { index: 43, binary: 101011, char: 'r' },
  { index: 44, binary: 101100, char: 's' },
  { index: 45, binary: 101101, char: 't' },
  { index: 46, binary: 101110, char: 'u' },
  { index: 47, binary: 101111, char: 'v' },
  { index: 48, binary: 110000, char: 'w' },
  { index: 49, binary: 110001, char: 'x' },
  { index: 50, binary: 110010, char: 'y' },
  { index: 51, binary: 110011, char: 'z' },
  { index: 52, binary: 110100, char: '0' },
  { index: 53, binary: 110101, char: '1' },
  { index: 54, binary: 110110, char: '2' },
  { index: 55, binary: 110111, char: '3' },
  { index: 56, binary: 111000, char: '4' },
  { index: 57, binary: 111001, char: '5' },
  { index: 58, binary: 111010, char: '6' },
  { index: 59, binary: 111011, char: '7' },
  { index: 60, binary: 111100, char: '8' },
  { index: 61, binary: 111101, char: '9' },
  { index: 62, binary: 111110, char: '+' },
  { index: 63, binary: 111111, char: '/' } ]

```
