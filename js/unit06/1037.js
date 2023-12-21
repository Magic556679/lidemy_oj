// Array filter

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

  let result = filter(numbers, function (el) {
    return el !== targetStr
  })

  for (let k = 0; k < result.length; k++) {
    console.log(result[k])
  }
}

function filter(arr, callback) {
  let newArr = []
  for (let j = 0; j < arr.length; j++) {
    if (callback(arr[j])) {
      newArr.push(arr[j])
    }
  }
  return newArr
}

solve(['3', '5', '1', '3', '3', '2', '8'])
