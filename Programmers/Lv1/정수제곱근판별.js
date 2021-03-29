// 정수 제곱근 판별

const solution = (n) => {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

const n = 121;
console.log(solution(n));