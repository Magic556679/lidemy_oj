// 靈魂伴侶
const searchSoul = params => {
  const getParams = params[0].split(' ')
  const a = getParams[0]
  const b = getParams[1]
  if (1 <= a && b <= 2 ** 31 - 1 && a === b) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
searchSoul(['10 15'])
