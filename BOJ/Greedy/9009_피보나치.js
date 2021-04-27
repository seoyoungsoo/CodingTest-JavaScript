// 9009번 피보나치

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  const T = input[0];
  const arr = Array.from({length: 50}, (v, i) => i);
  
  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  arr.sort((a, b) => b - a);
  
  for (let j = 1; j < T + 1; j++) {
    const num = input[j], res = [];
    let tmp = 0;
    for (let k = 0; k < arr.length - 1; k++) {
      if (tmp + arr[k] <= num) {
        tmp += arr[k];
        res.unshift(arr[k]);
      }
    }
    console.log(res.join(' '));
  }

  process.exit();
})