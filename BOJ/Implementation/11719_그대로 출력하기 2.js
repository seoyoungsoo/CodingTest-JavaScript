// 11719번 그대로 출력하기 2

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `    Hello

Baekjoon     
   Online Judge    `
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const res = [];

while (true) {
  let tmp = input();

  if (tmp === undefined) {
    break;
  }
  res.push(tmp);
}

console.log(res.join('\n'));