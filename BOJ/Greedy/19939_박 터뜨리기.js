// 19939번 박 터뜨리기

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(e => parseInt(e)));
}).on(('close'), () => {
  let N = input[0][0], K = input[0][1];
  
  if (N < Math.floor(K * (K + 1) / 2)) console.log(-1);
  else {
    let left = N - Math.floor(K * (K + 1) / 2);
    left % K === 0 ? console.log(K - 1) : console.log(K);
  }

  process.exit();
})