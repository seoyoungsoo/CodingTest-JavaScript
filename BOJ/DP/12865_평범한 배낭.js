// 12865번 평범한 배낭
// 풀이참조: https://kscodebase.tistory.com/351

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 7
6 13
4 8
3 6
5 12`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(e => parseInt(e));
const dp = Array.from({length:N+1}, () => Array(K+1).fill(0));
let weights = [0], values = [0];

for (let i = 0; i < N; i++) {
  const [w, v] = input().split(' ').map(e => parseInt(e));

  weights.push(w);
  values.push(v);
}

for (let i = 1; i < dp.length; i++) {
  const w = weights[i];
  const v = values[i];

  for (let j = 1; j <= K; j++) {
    if (j - w < 0) {
      dp[i][j] = dp[i-1][j];
    } else {
      dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - w] + v);
    }
  }
}

console.log(Math.max(...dp[dp.length-1]));