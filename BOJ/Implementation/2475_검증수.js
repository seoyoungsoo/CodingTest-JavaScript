// 2475번 검증수

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `0 4 2 5 6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const num = input().split(' ').map(e => parseInt(e));
let res = 0;

num.forEach(v => res += Math.pow(v, 2));

console.log(res % 10);