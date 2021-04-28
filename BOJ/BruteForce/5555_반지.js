// 5555번 반지

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const str = input.shift();
  const n = +input.shift();
  let res = 0;

  for (let i = 0; i < n; i++) {
    let s = input[i];
    if (s.includes(str)) res++;
    else {
      for (let i = 1; i < str.length; i++) {
        const tmp = s.slice(str.length - i) + s.slice(0, i);
        if (tmp.includes(str)) {
          res++;
          break;
        }
      }
    }
  }
  console.log(res);

  process.exit();
})