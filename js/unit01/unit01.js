function sum(numbers) {
  const getNumbers = numbers[0].split(' ');
  let total = 0;
  for (let i = 0; getNumbers.length > i; i++) {
    total += Number(getNumbers[i]);
  }
  // console.log(total);
};
sum(['0 1 6']);

function searchMaxNum(arr) {
  const getArr = arr[0].split(' ');
  let current = Number(getArr[0]);
  for (let i = 0; getArr.length > i; i++) {
    if (current < Number(getArr[i])) {
      current = getArr[i]
    }
  }
  console.log(current);
};
searchMaxNum(['100 23 323 43 59 234 34'])