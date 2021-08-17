// 11403번 경로 찾기

const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `7
0 0 0 1 0 0 0
0 0 0 0 0 0 1
0 0 0 0 0 0 0
0 0 0 0 1 1 0
1 0 0 0 0 0 0
0 0 0 0 0 0 1
0 0 1 0 0 0 0`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

const N = parseInt(input());
const graph = Array.from({length: N}, () => input().split(' ').map(e => parseInt(e)));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] || (graph[i][k] && graph[k][j])) {
        graph[i][j] = 1;
      }
    }
  }
}

for (let item of graph) {
  console.log(item.join(' '));
}