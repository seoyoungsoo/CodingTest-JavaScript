// 3184번 양

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const graph = [];
let R, C;
let visited;
let [lamb, wolf] = [0, 0];

const BFS = (x, y) => {
  let [dlamb, dwolf] = [0, 0];
  visited[x][y] = 1;
  const q = [[x, y]];
  
  if (graph[x][y] === 'o') dlamb++;
  else if (graph[x][y] === 'v') dwolf++;

  while (q.length) {
    const [x1, y1] = q.shift();
    for (let [dx, dy] of dxy) {
      let nx = x1 + dx;
      let ny = y1 + dy;
      if (0 <= nx && nx < R && 0 <= ny && ny < C && visited[nx][ny] === 0 && graph[nx][ny] !== '#') {
        if (graph[nx][ny] === 'o') dlamb++;
        if (graph[nx][ny] === 'v') dwolf++;
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }
  if (dlamb > 0 && dwolf > 0) {
    if (dlamb > dwolf) wolf -= dwolf;
    else lamb -= dlamb;
  }
}

const solution = (input) => {
  [R, C] = input.shift().split(' ').map(e => parseInt(e));
  visited = Array.from(Array(R), () => Array(C).fill(0));

  while (input.length) {
    const tmp = input.shift().split('');

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === 'o') lamb++;
      if (tmp[i] === 'v') wolf++;
    }
    graph.push(tmp);
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (visited[i][j] === 0 && graph[i][j] !== '#') {
        BFS(i, j);
      }
    }
  }
  console.log(lamb, wolf);
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})