// 2589번 보물섬

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5 7
WLLWWWL
LLLWLLL
LWLWLWW
LWLWLLL
WLLWLWW`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const BFS = (i, j) => {
  const q = [[i, j]];

  visited = Array.from({length:V}, () => Array(H).fill(0));
  visited[i][j] = 1;

  while (q.length) {
    let [nx, ny] = q.shift();
    for (let i = 0; i < 4; i++) {
      let dx = nx + dxy[i][0];
      let dy = ny + dxy[i][1];
      if (0 <= dx && dx < V && 0 <= dy && dy < H) {
        if (graph[dx][dy] === 'L' && visited[dx][dy] === 0) {
          visited[dx][dy] = visited[nx][ny] + 1;
          q.push([dx, dy]);
        }
      }
    }
  }
  return Math.max(...visited.flat());
}

const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const [V, H] = input().split(' ').map(e => parseInt(e));
const graph = Array.from({length:V}, () => input().split(''));
let visited = [];

let maxValue = 0;
for (let i = 0; i < V; i++) {
  for (let j = 0; j < H; j++) {
    if (graph[i][j] === 'L') {
      maxValue = Math.max(maxValue, BFS(i, j));
    }
  }
}

console.log(maxValue - 1);