// 2644번 촌수계산

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (input) => {
  const BFS = (p) => {
    const q = [p];
    let cnt = 0;

    while (q.length) {
      cnt++;
      let len = q.length;
      
      for (let i = 0; i < len; i++) {
        const n = q.shift();
        visited[n] = 1;
        for (let num of graph[n]) {
          if (visited[num] === 0) {
            if (num === p2) return cnt;
            q.push(num);
          }
        }
      }
    }
    return -1;
  }

  const n = +input.shift();
  const [p1, p2] = input.shift().split(' ').map(e => parseInt(e));
  const m = +input.shift();
  const graph = Array.from(Array(n + 1), () => Array());
  const visited = Array(n + 1).fill(0);

  for (let i = 0; i < m; i++) {
    const [n1, n2] = input[i].split(' ').map(e => parseInt(e));
    graph[n1].push(n2);
    graph[n2].push(n1);
  }
  console.log(BFS(p1));
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})