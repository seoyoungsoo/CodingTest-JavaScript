// 10026번 적록색약

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const bfs = (i, j, isRG) => {
  const q = [[i, j]];
  const firstChr = graph[i][j];
  
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (const [nx, ny] of dxy) {
      const [dx, dy] = [x + nx, y + ny];
      if (0 <= dx && dx < N && 0 <= dy && dy < N) {
        // 적록 색약일 경우
        if (isRG) {
          if (!visitedrg[dx][dy]) {
            if ((firstChr === 'R' || firstChr === 'G') && (graph[dx][dy] === 'R' || graph[dx][dy] === 'G')) {
              q.push([dx, dy]);
              visitedrg[dx][dy] = 1;
            } else if (firstChr === 'B' && graph[dx][dy] === 'B') {
              q.push([dx, dy]);
              visitedrg[dx][dy] = 1;
            }
          }
        } else {
          // 적록 색약이 아닐 경우
          if (!visitednrg[dx][dy]) {
            if (firstChr === graph[dx][dy]) {
              q.push([dx, dy]);
              visitednrg[dx][dy] = 1;
            }
          }
        }
      }
    }
  }
}

const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const N = parseInt(input());
const graph = Array.from({length:N}, () => input().split(''));

let visitedrg = Array.from({length:N}, () => Array(N).fill(0));
let visitednrg = Array.from({length:N}, () => Array(N).fill(0));
let cntRg = 0, cntNrg = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitednrg[i][j]) {
      cntNrg++;
      visitednrg[i][j] = 1;
      bfs(i, j, false);
    }
    if (!visitedrg[i][j]) {
      cntRg++;
      visitedrg[i][j] = 1;
      bfs(i, j, true);
    }
  }
}

console.log(cntNrg, cntRg);