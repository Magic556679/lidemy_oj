// 不合群的人

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
  const firstStr = lines[1]
  let aArr = []
  let bArr = []
  let result = []
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === firstStr) {
      aArr.push(i)
    } else {
      bArr.push(i)
    }
  }
  if (aArr.length > bArr.length) {
    result = bArr
  } else if (aArr.length < bArr.length) {
    result = aArr
  }
  for (let j = 0; j < result.length; j++) {
    if (result.length !== 0) {
      console.log(result[j])
    }
  }
  if (result.length === 0) {
    console.log('PEACE')
  }
}

solve(['5', 'A', 'B', 'B', 'A', 'B', 'A'])
