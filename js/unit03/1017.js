// 貪婪的小偷
const computed = lines => {
  let getStuff = []
  let c = Number(lines[0])
  let n = Number(lines[1])
  let total = 0

  for (let i = 2; i < lines.length; i++) {
    getStuff.push(lines[i])
  }

  if (c > n) {
    getStuff.map(item => {
      total += Number(item)
    })
  } else {
    let sortGetMaxArr = getStuff.sort((a, b) => {
      return b - a
    })
    console.log(typeof sortGetMaxArr[0])
    for (let j = 0; j < c; j++) {
      total += Number(sortGetMaxArr[j])
    }
  }
  console.log(total)
}
// computed([0, 1, 10000000])
// computed([5, 1, 100])
computed([3, 5, 1, 3, 5, 7, 9])
// computed([1, 5, 4, 5, 100, 101, 1])
// computed([2, 5, 5, 10, 2, 20, 40])
