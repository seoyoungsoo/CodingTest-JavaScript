// 1475번 방 번호

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `1199`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = input().split('').map(e => parseInt(e));
const number = Array.from({length:10}, () => 0);

N.forEach(v => {
  number[v]++;
})

let max = Math.ceil((number[6] + number[9]) / 2);

number[6] = 0, number[9] = 0;

for (let num of number) {
  max = Math.max(max, num);
}

console.log(max);