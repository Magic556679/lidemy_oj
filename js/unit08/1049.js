// 陣列最短距離

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
  const x = lines[1].split(' ').map(Number)
  const y = lines[2].split(' ')
  let distance = Infinity
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      if (Math.abs(x[i] - y[j]) < distance && Math.abs(x[i] - y[j]) >= 0) {
        distance = Math.abs(x[i]) - Math.abs(y[j])
      }
    }
  }
  console.log(distance)
}

solve(['5 5', '1 9 12 15 18', '3 6 10 11 12'])
