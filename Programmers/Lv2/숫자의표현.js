// 숫자의 표현

const solution = (n) => {
  let cnt = 0
  for (let i = 1; i < n+1; i++) {
    let tmp = 0;
    for (let j = i; j < n+1; j++) {
      tmp += j;
      if (tmp > n) break
      else if (tmp === n) cnt++;
    }
  }
  return cnt;
}

const n = 15;
console.log(solution(n));