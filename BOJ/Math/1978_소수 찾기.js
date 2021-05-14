// 1978번 소수 찾기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4
1 3 5 7`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const isPrime = (i) => {
  if (i === 2 || i === 3) return true;
  if (i <= 1 || i % 2 === 0) return false;
  for (let k = 3; k <= Math.sqrt(i); k += 2) {
    if (i % k === 0) return false;
  }
  return true;
}

const n = parseInt(input());
const num = input().split(' ').map(e => parseInt(e));
let cnt = 0;

for (let i of num) {
  if (isPrime(i)) {
    cnt++;
  }
}

console.log(cnt);