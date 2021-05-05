// 9184번 신나는 함수 실행

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const N = 20
let arr = Array(N+1);
for (let i = 0; i < N+1; ++i) {
  arr[i] = new Array(N+1);
  for (let j = 0; j < N+1; ++j) {
    arr[i][j] = new Array(N+1).fill(0);
  }
}

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }
  if (arr[a][b][c] !== 0) {
    return arr[a][b][c];
  }
  if (a < b && b < c) {
    let t1 = arr[a][b][c-1] = w(a, b, c-1);
    let t2 = arr[a][b-1][c-1] = w(a, b-1, c-1);
    let t3 = arr[a][b-1][c] = w(a, b, c-1);
    return arr[a][b][c] = t1 + t2 - t3;
  }
  else {
    let t1 = arr[a-1][b][c] = w(a-1, b, c);
    let t2 = arr[a-1][b-1][c] = w(a-1, b-1, c);
    let t3 = arr[a-1][b][c-1] = w(a-1, b, c-1);
    let t4 = arr[a-1][b-1][c-1] = w(a-1, b-1, c-1);
    return arr[a][b][c] = t1 + t2 + t3 - t4;
  }
}

const solution = (input) => {
  while (true) {
    const [a, b, c] = input.shift().split(' ').map(e => parseInt(e));
    if (a === -1 && b === -1 && c === -1) break;

    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})