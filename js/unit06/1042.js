// String toLowerCase

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
  const result = toLowerCase(lines[0])
  console.log(result)
}

function toLowerCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const formatStr = str[i].charCodeAt()
    // 65 可以改成 "A" 90 可以改成 "Z", js 可以自動轉換 ASCII
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      result += String.fromCharCode(formatStr + 32)
    } else {
      result += String.fromCharCode(formatStr)
    }
  }
  return result
}

solve(['AbC!!'])
