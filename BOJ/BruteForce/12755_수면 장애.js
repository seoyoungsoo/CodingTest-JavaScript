// 12755번 수면 장애

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `15`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());

let digit = 0, sum = 0, psum = 0, s = 9;

while (sum < N) {
  digit++;
  psum = sum;
  sum += s * digit;
  s *= 10;
}

const from = Math.pow(10, digit - 1);
const idx = N - psum - 1;
const num = from + parseInt(idx / digit);

console.log(num.toString().charAt(idx % digit));