// Array indexOf

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
  const targetStr = Number(lines[0])
  let numbers = []
  for (let i = 2; i < lines.length; i++) {
    numbers.push(lines[i])
  }
  const result = indexOf(numbers, function (el) {
    return Number(el) === targetStr
  })
  console.log(String(result))
}

function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (searchElement(arr[i])) {
      return i
    }
  }
  return -1
}

solve(['3', '5', '1', '2', '3', '3', '3'])
