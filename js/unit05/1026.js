// 判斷等比數列
const geometricProgression = function (params) {
  let result = '';
  if (params.length === 0) {
    result = 'Yes'
    console.log(result)
    return
  }
  const x = Number(params[0]);
  const y = params[1].split(' ');
  if (y.length === 1) {
    result = 'Yes'
    console.log(result)
    return
  }
  const difference = y[1] / y[0];
  for (let i = 0; i < x; i++) {
    if (!y[i + 1]) break
    if (y[i + 1] / y[i] === difference) {
      result = 'Yes'
    } else {
      result = 'No'
      break
    }
  }
  console.log(result)
}