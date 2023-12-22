// Array join

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
  const targetStr = lines[0]
  let numbers = []
  for (let i = 2; i < lines.length; i++) {
    numbers.push(lines[i])
  }
  const result = join(numbers, targetStr)
  let str = ''
  for (let j = 0; j < result.length; j++) {
    str += result[j]
  }
  console.log(str)
}

function join(arr, separator) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    if (i + 1 < arr.length) {
      newArr.push(separator)
    }
  }
  return newArr
}

solve([',', '3', '1', '2', '3'])
