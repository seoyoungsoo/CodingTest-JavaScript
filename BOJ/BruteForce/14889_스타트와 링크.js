// 14889번 스타트와 링크
// 코드참조: https://gobae.tistory.com/50

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const dfs = (L, K) => {
  if (L === N / 2) {
    const sTeam = [], lTeam = [];
    let sSum = 0, lSum = 0;

    for (let i = 0; i < N; i++) {
      if (check[i]) sTeam.push(i);
      else lTeam.push(i);
    }
    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        sSum += graph[sTeam[i]][sTeam[j]] + graph[sTeam[j]][sTeam[i]];
        lSum += graph[lTeam[i]][lTeam[j]] + graph[lTeam[j]][lTeam[i]];
      }
    }
    min = Math.min(min, Math.abs(sSum - lSum));
    return;
  }

  for (let i = K; i < N; i++) {
    check[i] = 1;
    dfs(L + 1, i + 1);
    check[i] = 0;
  }
}

const N = parseInt(input());
const graph = Array.from({length:N}, () => input().split(' ').map(e => parseInt(e)));
const check = Array.from({length:N}, () => 0);

let min = Number.MAX_SAFE_INTEGER;

dfs(0, 0);
console.log(min);