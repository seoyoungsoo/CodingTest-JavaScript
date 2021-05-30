// 2225번 합분해
// 해결참조: https://mizzo-dev.tistory.com/entry/baekjoon2225

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `20 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(e => parseInt(e));
const dp = Array.from({length:K+1}, () => Array.from({length:N+1}, () => 0));
dp[0][0] = 1;

for (let i = 0; i <= K; i++) {
  for (let j = 0; j <= N; j++) {
    for (let k = 0; k <= j; k++) {
      if (i - 1 >= 0) {
        dp[i][j] += dp[i-1][j-k];
        dp[i][j] %= 1000000000;
      }
    }
  }
}

console.log(dp[K][N]);