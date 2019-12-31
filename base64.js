const table = [
  { index: 0, binary: 000000, char: 'A' },
  { index: 1, binary: 000001, char: 'B' },
  { index: 2, binary: 000010, char: 'C' },
  { index: 3, binary: 000011, char: 'D' },
  { index: 4, binary: 000100, char: 'E' },
  { index: 5, binary: 000101, char: 'F' },
  { index: 6, binary: 000110, char: 'G' },
  { index: 7, binary: 000111, char: 'H' },
  { index: 8, binary: 001000, char: 'I' },
  { index: 9, binary: 001001, char: 'J' },
  { index: 10, binary: 001010, char: 'K' },
  { index: 11, binary: 001011, char: 'L' },
  { index: 12, binary: 001100, char: 'M' },
  { index: 13, binary: 001101, char: 'N' },
  { index: 14, binary: 001110, char: 'O' },
  { index: 15, binary: 001111, char: 'P' },
  { index: 16, binary: 010000, char: 'Q' },
  { index: 17, binary: 010001, char: 'R' },
  { index: 18, binary: 010010, char: 'S' },
  { index: 19, binary: 010011, char: 'T' },
  { index: 20, binary: 010100, char: 'U' },
  { index: 21, binary: 010101, char: 'V' },
  { index: 22, binary: 010110, char: 'W' },
  { index: 23, binary: 010111, char: 'X' },
  { index: 24, binary: 011000, char: 'Y' },
  { index: 25, binary: 011001, char: 'Z' },
  { index: 26, binary: 011010, char: 'a' },
  { index: 27, binary: 011011, char: 'b' },
  { index: 28, binary: 011100, char: 'c' },
  { index: 29, binary: 011101, char: 'd' },
  { index: 30, binary: 011110, char: 'e' },
  { index: 31, binary: 011111, char: 'f' },
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
  { index: 63, binary: 111111, char: '/' },
]

const padding = '='

function charForIndex(index) {
  return index < 0 && index >= 64 ? padding : table[index].char
}

function indexForChar(ch) {
  return containsChar(ch) ? table.filter(i => i.char === ch).pop().index : -1
}

function containsChar(ch) {
  return table.some(i => i.char === ch)
}

function charString() {
  return table.reduce((acc, v) => acc + v.char, '')
}

module.exports = {
  table,
  padding,
  charForIndex,
  indexForChar,
  containsChar,
  charString
}
