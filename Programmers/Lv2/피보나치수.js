// 피보나치 수

const solution = (n) => {
  const fibo = [0, 1];
  if (n < 3) return fibo[n-1];
  else {
    for (let i = 2; i < n+1; i++) {
      fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567;
    }
  }
  return fibo[n];
}

const n = 5;
console.log(solution(n));