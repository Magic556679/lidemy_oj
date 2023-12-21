// Array fill

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
  const result = fill(numbers, function () {
    return targetStr
  })
  for (let j = 0; j < numbers.length; j++) {
    console.log(result[j])
  }
}

function fill(arr, value) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(value())
  }
  return newArr
}

solve(['10', '3', '1', '2', '3'])
