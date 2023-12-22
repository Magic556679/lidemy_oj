// String slice

// var readline = require('readline')

// var lines = []
// var rl = readline.createInterface({
//   input: process.stdin,
// })

// rl.on('line', function (line) {
//   lines.push(line)
// })

// rl.on('close', function () {
//   solve(lines)
// })

function solve(lines) {
  const str = lines[0]
  const target = Number(lines[1])
  const repeat = Number(lines[2])
  let result = slice(str, target, repeat)
  console.log(result)
}

function slice(str, beginIndex, endIndex) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i >= beginIndex && endIndex - 1 >= i) {
      newStr += str[i]
    }
  }
  return newStr
}

solve(['abcde', '0', '3'])
// abc
