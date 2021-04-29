// 1012번 유기농 배추

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const BFS = (x, y) => {
    visited[x][y] = 1;
    const q = [[x, y]];

    while (q.length) {
      const n = q.shift();
      for (let [dx, dy] of dxy) {
        const dnx = n[0] + dx;
        const dny = n[1] + dy;
        if (0 <= dnx && dnx < M && 0 <= dny && dny < N) {
          if (graph[dnx][dny] === 1 && visited[dnx][dny] === 0) {
            visited[dnx][dny] = 1;
            q.push([dnx, dny]);
          }
        }
      }
    }
  }

  const dxy = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let graph = [], visited = [];
  let [M, N, K] = [0, 0, 0];
  const T = +input.shift();
  
  for (let i = 0; i < T; i++) {
    [M, N, K] = input.shift().split(' ').map(e => parseInt(e));

    graph = Array.from(Array(M), () => Array(N).fill(0));
    visited = Array.from(Array(M), () => Array(N).fill(0));
    let cnt = 0;

    const points = input.splice(0, K).map((point) => {
      const [x, y] = point.split(' ').map((p) => parseInt(p));
      graph[x][y] = 1;
      return [x, y];
    });

    while (points.length) {
      const [nx, ny] = points.shift();

      if (visited[nx][ny] === 0) {
        cnt++;
        BFS(nx, ny);
      }
    }
    console.log(cnt);
  }

  process.exit();
})