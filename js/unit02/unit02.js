function secondaryNumber(numbers) {
  const getNumbers = numbers[0].split(' ')
  let minNum = getNumbers[0]
  let secondaryNum = 0
  for (let i = 0; getNumbers.length > i; i++) {
    if (getNumbers[i] < minNum) {
      secondaryNum = minNum
      minNum = getNumbers[i]
    } else if (getNumbers[i] < secondaryNum) {
      secondaryNum = getNumbers[i]
    }
  }
  // console.log('minNum:' + minNum, 'secondaryNum:' + secondaryNum);
}
secondaryNumber(['7 2 6 34 54 1'])

const ascii = text => {
  // https://zh.wikipedia.org/zh-tw/ASCII
  const getText = text[0].split(' ')
  const capitalArr = []
  getText.forEach(item => {
    // 65 ~ 90 大寫 , 97 ~ 122 小寫
    let number = Infinity
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
      number = item.charCodeAt() + 32
    } else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
      number = item.charCodeAt() - 32
    }
    let capital = String.fromCharCode(number)
    capitalArr.push(capital)
  })
  // console.log(capitalArr)
}
ascii(['a P p l e'])

const deleteText = texts => {
  const getText = texts[0].split(' ')
  const deleteText = 'a'
  const arr = []
  for (let i = 0; getText.length > i; i++) {
    if (getText[i] !== deleteText) {
      arr.push(getText[i])
    }
  }
  // console.log(arr)
}
deleteText(['a p p l e'])

const searchFactor = factor => {
  for (let i = 0; i < factor; i++) {
    if (i % 2 === 0) {
      // console.log(i)
    }
  }
}
searchFactor(30)
