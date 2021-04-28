// 12755번 수면 장애

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  let n = input[0];
  let i = 0;

  while (n > 0) {
    i++;
    let str = String(i);
    n -= str.length;
    if (n <= 0) {
      console.log(str.charAt(str.length - 1 + n));
    }
  }

  process.exit();
})