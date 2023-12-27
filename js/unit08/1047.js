// 搜尋數字

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
  let firstStr = lines[0].split(' ')
  let searchLength = Number(firstStr[0])
  let pLength = Number(firstStr[1])
  let arr = []
  let p = []
  for (let i = 1; i <= searchLength; i++) {
    arr.push(Number(lines[i]))
  }
  for (let i = lines.length - 1; i >= lines.length - pLength; i--) {
    p.unshift(Number(lines[i]))
  }
  for (let i = 0; i < p.length; i++) {
    const result = binarySearch(arr, p[i])
    console.log(result)
  }
}

// binary search algorithm
function binarySearch(array, q) {
  let l = 0
  let r = array.length - 1
  let t = Math.floor((l + r) / 2)
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (array[m] === q) {
      return m
    } else if (array[m] > q) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
}

solve(['5 3', '1', '2', '3', '4', '5', '100', '3', '6'])
