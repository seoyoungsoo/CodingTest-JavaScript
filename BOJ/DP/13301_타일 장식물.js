// 13301번 타일 장식물

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const n = +input[0];

  let a = 1, b = 1;

  for (let i = 0; i < n; i++) {
    let tmp = a + b;
    a = b;
    b = tmp;
  }
  console.log(b*2);

  process.exit();
})