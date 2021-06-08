// 10211번 Maximum Subarray
// 코드참조: https://bright-code.tistory.com/148

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
5
1 2 3 4 5
5
2 1 -2 3 -5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = parseInt(input());

for (let _ = 0; _ < T; _++) {
  const N = parseInt(input());
  const X = input().split(' ').map((e) => parseInt(e));

  for (let i = 1; i < N; i++) {
    X[i] += X[i-1] > 0 ? X[i-1] : 0;
  }

  console.log(Math.max(...X));
}
