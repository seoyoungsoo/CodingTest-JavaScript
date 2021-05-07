// 2609번 최대공약수와 최소공배수

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `24 18`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const GCD = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return a;
}

const num = input().split(' ').map(e => parseInt(e));

const a = Math.max(...num), b = Math.min(...num);
const gcd = GCD(a, b);
const lcd = a * b / gcd;

console.log(gcd);
console.log(lcd);