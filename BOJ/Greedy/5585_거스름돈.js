// 5585번 거스름돈

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  const money = [500, 100, 50, 10, 5, 1];
  let changes = 1000 - input[0];
  let cnt = 0;

  for (let m of money) {
    if (changes >= m) {
      cnt += Math.floor(changes / m);
      changes %= m;
    }
  }
  console.log(cnt);

  process.exit();
})