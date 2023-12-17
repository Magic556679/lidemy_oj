// 聖誕樹
let printStart = n => {
  for (let i = 1; n >= i; i++) {
    computedPrint(n - i, 2 * i - 1)
  }
  for (let k = 1; n > k; k++) {
    setTree(n - k, n - 1)
  }
}
// printStart(10);

const computedPrint = (space, o) => {
  let start = ''
  for (let j = 0; j < space; j++) {
    start += ' '
  }
  for (let i = 0; i < o; i++) {
    start += '*'
  }
  // console.log(start);
}

const setTree = (space, tree) => {
  let setTree = ''
  for (let k = 0; k < tree; k++) {
    setTree += ' '
  }
  setTree += '|'
  // console.log(setTree)
}
