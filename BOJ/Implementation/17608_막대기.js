// 17608번 막대기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
5
4
3
2
1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const stick = Array.from({length:N}, () => parseInt(input()));

let look = stick[stick.length - 1];
let cnt = 1;

for (let i = stick.length - 2; i >= 0; i--) {
  if (look < stick[i]) {
    cnt++;
    look = stick[i];
  }
}

console.log(cnt);