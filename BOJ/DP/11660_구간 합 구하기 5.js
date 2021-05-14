// 11660번 구간 합 구하기 5

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 나의 풀이
// 시간 초과 발생
// const [N, M] = input().split(' ').map(e => parseInt(e));
// const arr = Array.from({length: N}, () => []);

// for (let i = 0; i < N; i++) {
//   arr[i] = input().split(' ').map(e => parseInt(e));
// }

// for (let _ = 0; _ < M; _++) {
//   let [x1, y1, x2, y2] = input().split(' ').map(e => parseInt(e) - 1);
//   let res = 0;

//   for (let i = x1; i <= x2; i++) {
//     for (let j = y1; j <= y2; j++) {
//       res += arr[i][j];
//     }
//   }
//   console.log(res);
// }

const [N, M] = input().split(' ').map(e => parseInt(e));
const dp = Array.from({length: N}, () => input().split(' ').map(e => parseInt(e)));

for (let i = 0; i < N; i++) {
  for (let j = 1; j < N; j++) {
    dp[i][j] += dp[i][j-1];
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N; j++) {
    dp[i][j] += dp[i-1][j];
  }
}

for (let _ = 0; _ < M; _++) {
  const [x1, y1, x2, y2] = input().split(' ').map(e => parseInt(e) - 1);
  let res = 0;

  if (y1 === 0 && x1 === 0) res = dp[x2][y2];
  else if (x1 === 0) res = dp[x2][y2] - dp[x2][y1 - 1];
  else if (y1 === 0) res = dp[x2][y2] - dp[x1 - 1][y2];
  else res = dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1 -1] + dp[x1 - 1][y1 - 1];

  console.log(res);
}