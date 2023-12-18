// 判斷迴文
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
  const tmp = lines[0].split('')
  let newStr = ''
  for (let i = tmp.length - 1; i >= 0; i--) {
    newStr += tmp[i]
  }
  if (lines[0] === newStr) {
    console.log('True')
  } else {
    console.log('False')
  }
}

// solve(['abbbbc'])
