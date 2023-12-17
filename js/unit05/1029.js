// 加減乘除
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
  const tem = lines[0].split(' ')
  const firstNumber = Number(tem[0])
  const lastNumber = Number(tem[2])
  let result = 0
  switch (true) {
    case tem[1] === '+':
      result = add(firstNumber, lastNumber)
      break
    case tem[1] === '-':
      result = subtract(firstNumber, lastNumber)
      break
    case tem[1] === '*':
      result = multiply(firstNumber, lastNumber)
      break
    case tem[1] === '/':
      result = divided(firstNumber, lastNumber)
      break
  }
  console.log(result)
  function add(first, last) {
    return first + last
  }

  function subtract(first, last) {
    return first - last
  }

  function multiply(first, last) {
    return first * last
  }
  function divided(first, last) {
    return first / last
  }
}

// solve(['100 / 10'])
