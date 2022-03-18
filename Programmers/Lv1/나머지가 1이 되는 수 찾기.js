// 나머지가 1이 되는 수 찾기

function solution(n) {
  let i = 1;

  while (i < n) {
    if (n % i === 1) break;
    else i++;
  }

  return i;
}

const n = 12;
console.log(solution(n));