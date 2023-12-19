// 圈圈叉叉

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
  const ox = function (params) {
    for (var i = 0; i < params.length; i++) {
      if (params[i][0] === 'O' && params[i][1] === 'O' && params[i][2] === 'O') {
        return 'O'
      }
      if (params[0][i] === 'O' && params[1][i] === 'O' && params[2][i] === 'O') {
        return 'O'
      }
      if (params[0][0] === 'O' && params[1][1] === 'O' && params[2][2] === 'O') {
        return 'O'
      }
      if (params[0][2] === 'O' && params[1][1] === 'O' && params[2][0] === 'O') {
        return 'O'
      }
    }
    for (var j = 0; j < params.length; j++) {
      if (params[j][0] === 'X' && params[j][1] === 'X' && params[j][2] === 'X') {
        return 'X'
      }
      if (params[0][j] === 'X' && params[1][j] === 'X' && params[2][j] === 'X') {
        return 'X'
      }
      if (params[0][0] === 'X' && params[1][1] === 'X' && params[2][2] === 'X') {
        return 'X'
      }
      if (params[0][2] === 'X' && params[1][1] === 'X' && params[2][0] === 'X') {
        return 'X'
      }
    }
    return 'DRAW'
  }
  console.log(ox(lines))
}

solve(['XXO', 'OXX', 'XOO'])
