// 약수의 합

const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) n % i === 0 ? result += i : result += 0;
  
  return result;
}

const n = 12;
console.log(solution(n));