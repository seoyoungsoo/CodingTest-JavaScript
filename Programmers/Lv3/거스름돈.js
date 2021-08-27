// 거스름돈
// 코드참조: https://taesung1993.tistory.com/74

const solution = (n, money) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;

  money.forEach((v, idx) => {
    for (let i = v; i < n + 1; i++) {
      dp[i] += dp[i - v];
    }
  });

  return dp[n] % 1000000007;
};

const n = 5;
const money = [1, 2, 5];
console.log(solution(n, money));
