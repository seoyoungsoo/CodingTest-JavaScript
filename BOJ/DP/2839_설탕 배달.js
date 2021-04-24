// 2839번 설탕 배달

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  let n = +input[0];
  let bag = 0;

  while (n >= 3) {
    if (n % 5 === 0) {
      bag += n / 5;
      n = 0;
      break;
    }
    n -= 3;
    bag += 1;
  }
  if (n > 0) {
    console.log(-1);
  } else {
    console.log(bag);
  }

  process.exit();
})