// 簡易排序

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
  // let arr = []
  // for (let i = 1; i < lines.length; i++) {
  //   arr.push(Number(lines[i]))
  // }
  // arr.sort(function (a, b) {
  //   return a - b
  // })

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }

  // for (let i = 1; i < lines.length; i++) {
  //   for (let j = 1; j < lines.length; j++) {
  //     if (lines[j] > lines[j + 1]) {
  //       let tmp = lines[j]
  //       lines[j] = lines[j + 1]
  //       lines[j + 1] = tmp
  //     }
  //   }
  // }
  // for (let i = 1; i < lines.length; i++) {
  //   console.log(lines[i])
  // }

  // counting sort
  let arr = []
  for (let i = 0; i < 100; i++) {
    arr[i] = 0
  }
  for (let i = 1; i < lines.length; i++) {
    let n = Number(lines[i])
    arr[n]++
  }
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < arr[i]; j++) {
      console.log(i)
    }
  }
}

solve([5, 1, 7, 4, 9, 5])
