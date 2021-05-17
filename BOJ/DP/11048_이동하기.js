// 11048번 이동하기

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 3
1 2 3
6 5 4
7 8 9
12 11 10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [n, m] = input().split(' ').map(e => parseInt(e));
const maze = Array.from({length: n}, () => input().split(' ').map(e => parseInt(e)));

for (let i = 1; i < n; i++) {
  maze[i][0] += maze[i-1][0];
}

for (let j = 1; j < m; j++) {
  maze[0][j] += maze[0][j-1];
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    maze[i][j] += Math.max(maze[i-1][j], maze[i][j-1], maze[i-1][j-1]);
  }
}

console.log(maze[n-1][m-1]);