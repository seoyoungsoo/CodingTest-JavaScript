// 1110번 더하기 사이클

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let n = input();
let num = n;
let sum, cnt = 0;

while (true) {
  cnt++;

  sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + sum % 10;

  if (num == n) break;
}

console.log(cnt);