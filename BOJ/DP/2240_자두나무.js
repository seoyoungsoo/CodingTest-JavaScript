// 2240번 자두나무
// 코드참조: https://kyoung-jnn.tistory.com/entry/%EB%B0%B1%EC%A4%802565%EB%B2%88%ED%8C%8C%EC%9D%B4%EC%8D%ACPython-%EC%A0%84%EA%B9%83%EC%A4%84-DP

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const n = parseInt(input());
let line = Array.from({length:n}, () => input().split(' ').map(e => parseInt(e)));

line.sort((a, b) => a[0] - b[0]);

dp = Array.from({length:n}, () => 1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (line[i][1] > line[j][1] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}
console.log(n - Math.max(...dp));