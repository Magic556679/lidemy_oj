// 搭電梯

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
  let firstStr = Number(lines[0])
  let arr = [1, 2]
  for (let i = 2; i < firstStr; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  console.log(arr[arr.length - 2])
}

solve(['6'])
