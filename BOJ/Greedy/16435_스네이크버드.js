// 16435번 스네이크버드

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(e => parseInt(e)));
}).on(('close'), () => {
  let L = input[0][1];
  const height = input[1].sort((a, b) => a - b);
  
  height.forEach(h => {
    if (L >= h) {
      L++;
    }
  })

  console.log(L);

  process.exit();
})