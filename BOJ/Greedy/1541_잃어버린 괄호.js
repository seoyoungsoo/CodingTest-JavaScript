// 1541번 잃어버린 괄호
// 코드참조: https://wonjs.tistory.com/5

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  let answer = 0;
  const minus = input[0].split('-');
  if (minus[0].indexOf('+') === -1) {
    answer += +minus[0];
  } else {
    answer += minus[0].split('+').map(Number).reduce((acc, cur) => acc += cur, 0);
  }
  
  for (let i = 1; i < minus.length; i++) {
    if (minus[i].indexOf('+') === -1) {
      answer -= +minus[i];
    } else {
      answer -= minus[i].split('+').map(Number).reduce((acc, cur) => acc += cur, 0);
    }
  }
  console.log(answer);

  process.exit();
})