// String endsWith

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
  const target = lines[1]
  let strArr = []
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i])
  }
  let result = endsWith(strArr, target)
  console.log(result)
}

function endsWith(str, searchString) {
  const searchLength = searchString.length
  let check = false
  for (let i = str.length - 1; i >= str.length - searchLength; i--) {
    for (let j = searchLength - 1; j >= 0; j--) {
      if (str[i] === searchString[j]) {
        check = true
      } else {
        check = false
      }
    }
  }
  return check
}

solve(['abcde', 'cde'])
// solve(['aaa', 'aa'])
