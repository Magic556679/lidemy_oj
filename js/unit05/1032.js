// 平面距離計算

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
  let firstNumber = Number(lines[0])
  for (let i = 1; firstNumber >= i; i++) {
    const startNumber = (i - 1) * 4 + 1
    let x1 = lines[startNumber]
    let y1 = lines[startNumber + 1]
    let x2 = lines[startNumber + 2]
    let y2 = lines[startNumber + 3]
    console.log(planeDistance(x1, y1, x2, y2))
  }
  function planeDistance(x1, y1, x2, y2) {
    return Math.sqrt(abs(x1 - x2) ** 2 + abs(y1 - y2) ** 2).toFixed(2)
  }
  function abs(number) {
    if (number < 0) {
      return -number
    } else {
      return number
    }
  }
}

solve([2, 1, 1, 2, 2, 3, 3, 4, 4])
