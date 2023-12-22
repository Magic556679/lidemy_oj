// String padEnd

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
  const str = lines[0]
  const target = Number(lines[1])
  const repeat = lines[2]
  let result = padEnd(str, target, repeat)
  console.log(result)
}

function padEnd(str, targetLength, padString) {
  let newStr = ''
  if (str.length > targetLength) return str
  for (let i = 0; i < targetLength; i++) {
    if (str[i]) {
      newStr += str[i]
    }
  }
  for (let i = 0; i < targetLength; i++) {
    if (newStr.length === targetLength) break
    for (let j = 0; j < padString.length; j++) {
      if (newStr.length === targetLength) break
      newStr += padString[j]
    }
  }
  return newStr
}

solve(['abcdfddfdf', '4', 'xyz'])
// output abcaaxyzxy
// solve(['abcaa', '5', 'xyz'])
// output abcaa
