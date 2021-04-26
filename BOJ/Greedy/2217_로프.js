// 2217번 로프

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  const rope = [];
  let maxW = 0;

  for (let i = 1; i < input.length; i++) {
    rope.push(input[i]);
  }
  rope.sort((a, b) => b - a);

  while (rope.length > 0) {
    let tmp = rope.length * rope.pop();
    if (tmp > maxW) maxW = tmp;
  }
  console.log(maxW);

  process.exit();
});