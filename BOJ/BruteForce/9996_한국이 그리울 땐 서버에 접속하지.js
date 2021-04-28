// 9996번 한국이 그리울 땐 서버에 접속하지

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const cmp_str = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  const n = +input.shift();
  const name = input.shift();
  let star = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === '*') star = i;
  }
  const left = name.slice(0, star);
  const right = name.slice(star+1);
  
  for (let i = 0; i < n; i++) {
    const word = input[i];
    
    if (word.length < left.length + right.length) {
      console.log('NE');
      continue;
    }

    const checkLeft = cmp_str(left, word.slice(0, left.length));
    if (!checkLeft) {
      console.log('NE');
      continue;
    }

    const checkRight = cmp_str(right, word.slice(word.length - right.length));
    if (!checkRight) {
      console.log('NE');
      continue;
    }

    console.log('DA');
  }

  process.exit();
})