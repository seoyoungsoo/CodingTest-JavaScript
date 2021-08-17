// 14500번 테트로미노
// 풀이참조: https://velog.io/@skyepodium/%EB%B0%B1%EC%A4%80-14500-%ED%85%8C%ED%8A%B8%EB%A1%9C%EB%AF%B8%EB%85%B8
// 코드참조: https://oranz.tistory.com/7

const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

const dfs = (len, value, x, y) => {
  if (len === 4) {
    res = Math.max(res, value);
    return;
  }
  if (value + (4 - len) * max < res) return;
  for (let [dx, dy] of dxy) {
    const nx = x + dx;
    const ny = y + dy;
    if (0 <= nx && nx < N && 0 <= ny && ny < M) {
      if (!visited[nx][ny]) {
        visited[nx][ny] = 1;
        if (len === 2) {
          dfs(len + 1, value + graph[nx][ny], x, y);
        }
        dfs(len + 1, value + graph[nx][ny], nx, ny);
        visited[nx][ny] = 0;
      }
    }
  }
  return;
}

let max = 0, res = 0;
const dxy = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const [N, M] = input().split(' ').map(e => parseInt(e));
const graph = Array.from({length: N}, () => {
  const row = input().split(' ').map(e => parseInt(e))
  max = Math.max(max, ...row);
  return row;
});
const visited = Array.from({length: N}, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = 1;
    dfs(1, graph[i][j], i, j);
    visited[i][j] = 0;
  }
}
console.log(res);