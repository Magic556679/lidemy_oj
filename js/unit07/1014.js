// 不九人世

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
  let getNumber = Number(lines[0])
  // console.log(parseInt(getNumber, 9))
  let digitsCount = 0
  let sum = 0
  while (getNumber > 0) {
    let num = getNumber % 10
    sum += 9 ** digitsCount * num
    getNumber = Math.floor(getNumber / 10)
    digitsCount++
  }
  console.log(sum)
}

solve(['99'])
