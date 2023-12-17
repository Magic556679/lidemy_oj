// NN 乘法表
const multiplication = (lines) => {
  let x = Number(lines[0])
  let y = Number(lines[1])
  for(let i = 1; i <= x; i++) {
    for(let j = 1; j <= y; j++) {
      console.log(`${i}*${j}=${i*j}`)
    }
  }
}
// multiplication([2, 3])