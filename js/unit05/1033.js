// 最近點對

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
  const tem = []
  for (let i = 1; i < lines.length; i++) {
    const current = lines[i].split(' ')
    let x = Number(current[0])
    let y = Number(current[1])
    tem.push({ x, y })
  }
  let min = Infinity
  let ans = null
  for (let i = 0; i < tem.length; i++) {
    for (let j = i + 1; j < tem.length; j++) {
      let dis = planeDistance(tem[i].x, tem[i].y, tem[j].x, tem[j].y)
      if (dis < min) {
        min = dis
        ans = {
          x1: tem[i].x,
          y1: tem[i].y,
          x2: tem[j].x,
          y2: tem[j].y,
        }
      }
    }
  }

  if (ans.x1 > ans.x2) {
    console.log(ans.x2 + ' ' + ans.y2)
    console.log(ans.x1 + ' ' + ans.y1)
  } else if (ans.x1 < ans.x2) {
    console.log(ans.x1 + ' ' + ans.y1)
    console.log(ans.x2 + ' ' + ans.y2)
  } else {
    if (ans.y1 > ans.y2) {
      console.log(ans.x2 + ' ' + ans.y2)
      console.log(ans.x1 + ' ' + ans.y1)
    } else {
      console.log(ans.x1 + ' ' + ans.y1)
      console.log(ans.x2 + ' ' + ans.y2)
    }
  }

  function planeDistance(x1, y1, x2, y2) {
    return Math.sqrt(abs(x1 - x2) ** 2 + abs(y1 - y2) ** 2)
  }
  function abs(number) {
    if (number < 0) {
      return -number
    } else {
      return number
    }
  }
}

solve(['4', '2 2', '1 1', '10 10', '100 100'])
// solve(['4', '2 3', '1 3', '1 2', '1 1'])
