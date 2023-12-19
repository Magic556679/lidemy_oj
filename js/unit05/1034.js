// 凱薩加密

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
  const n = Number(lines[0])
  const str = lines[1].split('')
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += asciiFormat(str[i])
  }

  function asciiFormat(str) {
    const asciiIndex = str.charCodeAt(0) - 97
    const moveStr = (asciiIndex + n) % 26
    return String.fromCharCode(moveStr + 97)
  }

  console.log(result)
}

solve(['1', 'apple'])
// solve(['10', 'xray'])
// solve(['100', 'apple'])
