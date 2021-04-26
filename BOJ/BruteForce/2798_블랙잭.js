// 2798번 블랙잭
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(n => parseInt(n)));
}).on(('close'), () => {
  const M = input[0][1];
  const cards = input[1];

  let state = 0;
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let tmp = cards[i] + cards[j] + cards[k];
        if (tmp > state && tmp <= M) state = tmp;
      }
    }
  }
  console.log(state);

  process.exit();
})