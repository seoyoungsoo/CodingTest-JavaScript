// 2210번 숫자판 점프

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const graph = [];
const res = new Set();

const DFS = (i, j, cnt, rst) => {
  rst += graph[i][j];
  cnt++;
  if (cnt === 6) {
    res.add(rst);
    return res;
  }
  for (let [x, y] of dxy) {
    let dx = i + x;
    let dy = j + y;
    if (0 <= dx && dx < 5 && 0 <= dy && dy < 5) {
      DFS(dx, dy, cnt, rst);
    }
  }
}

const solution = (input) => {
  while (input.length) {
    const n = input.shift().split(' ').map(e => parseInt(e));
    graph.push(n);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      DFS(i, j, 0, '');
    }
  }

  console.log(res.size);
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})