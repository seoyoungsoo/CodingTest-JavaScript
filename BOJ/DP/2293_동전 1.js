// 2293번 동전 1
// node의 경우 메모리 초과 발생
// python으로 제출 완료ㄴs

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3 10
1
2
5`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [n, k] = input().split(' ').map(e => parseInt(e));
const setCoins = new Set();
const dp = Array.from({length: k+1}, () => 0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  setCoins.add(parseInt(input()));
}

const coins = [...setCoins];

// n원을 만들 수 있는 경우의 수
// 이전에 n원을 만들 수 있는 경우의 수 + n원에서 현재 동전 k원을 뺀 경우의 수
for (let coin of coins) {
  for (let i = 1; i < k + 1; i++) {
    if (i - coin >= 0) {
      dp[i] += dp[i - coin];
    }
  }
}

console.log(dp[k]);