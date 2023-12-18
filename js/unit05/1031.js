// 完全平方和
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
  const tmp = Number(lines[0])
  let count = 0
  for (let i = 1; i < tmp + 1; i++) {
    let square = i ** 2
    if (tmp > square) {
      count += i ** 2
    }
  }
  console.log(count)
}

solve(['30'])
