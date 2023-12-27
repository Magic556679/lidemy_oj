// 逆序數對

var readline = require('readline')

var lines = []
var rl = readline.createInterface({
  input: process.stdin,
})

rl.on('line', function (line) {
  lines.push(line)
})

rl.on('close', function () {
  solve(lines)
})

function solve(lines) {
  const n = lines[1].split(' ')
  let arr = []
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    arr.push(Number(n[i]))
  }
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (arr[i] > arr[j] && i < j) {
        sum++
      }
    }
  }
  console.log(sum)
}

solve(['5', '5 4 3 2 1'])
