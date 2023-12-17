// 水仙花數
const digits = (num) => {
  let count = 0
  while(num > 0) {
    num = Math.floor(num / 10)
    count += 1
  }
  return count
}

const digitsCount = (num) => {
  let getDigit = digits(num);
  let total = 0
  while(num > 0) {
    let count = num % 10
    num = Math.floor(num / 10)
    total += count ** getDigit
  }
  return total
}

const narcissisticNumber = (lines) => {
  let temp = lines[0].split(' ')
  let x = Number(temp[0])
  let y = Number(temp[1])
  for (let i = x; y >= i; i++) {
    if (i === digitsCount(i)) {
      console.log(i)
    }
  }
}
narcissisticNumber(['5 1634'])
// narcissisticNumber([5, 10])