// 信用卡號驗證
const checkCreditCardNumber = function (params) {
  let arr = params[0].replace(/-/g, '').split('')

  let company = arr[0]
  let lastNumber = arr[arr.length - 1]
  let eventNumber = []
  let oddNumber = []
  for (let i = 0; i < arr.length - 1; i++) {
    if ([i + 1] % 2 === 1) {
      oddNumber.push(Number(arr[i]))
    } else {
      eventNumber.push(Number(arr[i]))
    }
  }
  const odd = oddNumberCompute(oddNumber)
  const event = eventNumberCompute(eventNumber)
  const getNumber = odd + event
  const addNumber = getNumber % 10 === 0 ? 0 : 10 - (getNumber % 10)
  const checkNumber = function (total, last, companyNumber) {
    switch (true) {
      case total === Number(last) && companyNumber === '5':
        console.log('MASTER_CARD')
        break
      case total === Number(last) && companyNumber === '4':
        console.log('VISA')
        break
      default:
        console.log('INVALID')
        break
    }
  }
  checkNumber(addNumber, lastNumber, company)
}
const oddNumberCompute = function (Numbers) {
  let total = 0
  for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] * 2 >= 10) {
      total += Numbers[i] * 2 - 9
    } else {
      total += Numbers[i] * 2
    }
  }
  return total
}
const eventNumberCompute = function (Numbers) {
  let total = 0
  for (let i = 0; i < Numbers.length; i++) {
    total += Numbers[i] * 1
  }
  return total
}
checkCreditCardNumber(['4034637323416363'])
