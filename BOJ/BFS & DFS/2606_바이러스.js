// 2606번 바이러스

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const BFS = (root) => {
    visited[root] = 1;
    let cnt = 0;
    const q = [root];

    while (q.length) {
      const n = q.shift();
      for (let v of graph[n]) {
        if (visited[v] !== 1) {
          visited[v] = 1;
          q.push(v);
          cnt++;
        }
      }
    }
    return cnt;
  }

  const N = +input.shift();
  const m = +input.shift();

  const graph = [...Array(N + 1)].map(() => []);
  const visited = Array(N + 1).fill(0);

  for (const edge of input) {
    const [v1, v2] = edge.split(' ').map(e => parseInt(e));
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  console.log(BFS(1));

  process.exit();
})