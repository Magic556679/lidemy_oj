// 生命靈數

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
  function addDigits(params) {
    let getParams = params[0].split(' ')
    const num = Number(getParams[0] + getParams[1] + getParams[2])
    let total = computeNumber(num)
    while (total >= 10) {
      total = computeNumber(total)
    }
    console.log(total)
  }
  addDigits(lines)
  function computeNumber(num) {
    let result = 0
    while (num > 0) {
      let digits = num % 10
      result += digits
      num = Math.floor(num / 10)
    }
    return result
  }
}

// solve(['1991 11 7'])
// solve(['1946 6 14'])
