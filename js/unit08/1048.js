// 最大連續和

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
  let arr = []
  let origin = 0
  let sum = 0

  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
    origin += Number(lines[i])
  }

  for (let i = 0; i < arr.length; i++) {
    sum = 0
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j]
      if (sum >= origin) {
        origin = sum
      }
    }
  }
  console.log(origin)
}

solve([5, 2, -3, 5, -3, 7])
