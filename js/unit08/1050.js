// Two sum

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
  let [length, target] = lines[0].split(' ')
  let linesArr = lines[1].split(' ')
  let arr = []
  let result = []
  for (let i = 0; i < linesArr.length; i++) {
    arr.push(Number(linesArr[i]))
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === Number(target)) {
        if (i > j) {
          result[0] = j
          result[1] = i
        } else {
          result[0] = i
          result[1] = j
        }
      }
    }
  }
  console.log('result', result)
}

solve(['5 3', '1 7 9 8 2'])
// solve(['3 3', '1 2 3'])
