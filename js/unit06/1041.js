// Array trim

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
  const result = trim(lines)
  console.log(result)
}

function trim(lines) {
  // const targetStr = lines[0]
  // const linesMap = lines[0].replace(/ /g, '').split('')
  // const firstStr = linesMap[0]
  // const lastStr = linesMap[linesMap.length - 1]
  // let firstSrtIndex = Infinity
  // let lastSrtIndex = Infinity
  // for (let i = 0; i < targetStr.length; i++) {
  //   if (targetStr[i] === firstStr) {
  //     firstSrtIndex = i
  //   }
  //   if (targetStr[i] === lastStr) {
  //     lastSrtIndex = i
  //   }
  // }
  // let str = ''
  // for (let i = 0; i < targetStr.length; i++) {
  //   if (i >= firstSrtIndex && i <= lastSrtIndex) {
  //     str += targetStr[i]
  //   }
  // }
  // return str

  const firstStr = lines[0]
  let isCopyStr = false
  let str = ''
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== ' ' || isCopyStr) {
      isCopyStr = true
      str += firstStr[i]
    }
  }
  console.log(str)
  let isCopyFinallyStr = false
  let finallyStr = ''

  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] !== ' ' || isCopyFinallyStr) {
      isCopyFinallyStr = true
      finallyStr = str[j] + finallyStr
    }
  }

  return finallyStr
}

solve(['      a b c '])
// solve(['abc'])
