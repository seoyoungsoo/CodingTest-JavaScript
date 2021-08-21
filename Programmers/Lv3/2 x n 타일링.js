// 배열을 추가할 때 방식에 따라 효율성의 차이가 발생

// 첫 번째 풀이
// 효율성 검사에서 실패
const solution = n => {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
}

// 두 번째 풀이
const solution = n => {
  const dp = [1, 2];

  for (let i = 0; i < n; i++) {
    dp.push((dp[i] + dp[i + 1]) % 1000000007);
  }
  return dp[n-1];
}

const n = 4;
console.log(solution(n));