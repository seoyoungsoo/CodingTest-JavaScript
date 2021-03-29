// 수박수박수박수박수박수?

const solution = (n) => {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += i % 2 ? '박' : '수';
  }
  return result;
};

// 다른 풀이
// const solution = (n) => {
//   return '수박'.repeat(n).substr(0, n);
// };

const n = 3;
console.log(solution(n));
