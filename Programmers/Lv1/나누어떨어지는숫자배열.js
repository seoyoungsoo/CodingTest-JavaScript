const solution = (arr, divisor) => {
  const result = [];

  for (let item of arr) {
    if (!(item % divisor)) {
      result.push(item);
    }
  }
  result.sort((a, b) => (a - b));

  return result.length > 0 ? result : [-1];
}

const arr = [3, 2, 6];
const divisor = 10;
console.log(solution(arr, divisor));

// filter를 사용한 풀이
// const solution = (arr, divisor) => {
//   const result = arr.filter(v => v % divisor == 0);
//   return result.length > 0 ? result.sort((a, b) => (a - b)) : [-1];
// }