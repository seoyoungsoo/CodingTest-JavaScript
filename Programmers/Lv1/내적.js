// 내적

const solution = (a, b) => {
  let result = 0;

  for (let i in a) {
    result += a[i] * b[i];
  }

  return result;
}

// reduce를 이용한 풀이
// const solution = (a ,b) => {
//   return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
// }

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
console.log(solution(a, b));