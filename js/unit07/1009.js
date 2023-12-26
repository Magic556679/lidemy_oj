// Yo！倒著唸！

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
  let n = lines[0]
  let str = ''
  for (var i = n.length - 1; i >= 0; i--) {
    str += n[i]
  }
  console.log(str)
}

solve(['abcde'])
