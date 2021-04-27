// 13417번 카드 문자열

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(e => {
    return isNaN(e) === false ? parseInt(e) : e;
  }));
}).on(('close'), () => {
  const T = input[0][0];
  
  for (let i = 2; i < input.length; i += 2) {
    const arr = input[i];
    
    let res = arr[0];
    for (let j = 1; j < arr.length; j++) {
      const num = arr[j].charCodeAt(0);
      if (num > res.charCodeAt(0)) {
        res = res + arr[j];
      } else {
        res = arr[j] + res;
      }
    }
    console.log(res);
  }

  process.exit();
})