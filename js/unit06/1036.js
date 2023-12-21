// Array reverse

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
  let arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(lines[i])
  }
  const result = reverse(arr)
  function reverse(params) {
    let newArr = []
    for (let j = params.length - 1; j >= 0; j--) {
      newArr.push(params[j])
    }
    return newArr
  }
  for (let j = 0; j < result.length; j++) {
    console.log(result[j])
  }
}

solve(['3', '1', '2', '3'])
