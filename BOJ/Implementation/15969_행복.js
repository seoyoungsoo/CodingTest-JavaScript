// 15969번 행복

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `8
85 42 79 95 37 11 72 32`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(' ').map(e => parseInt(e));

console.log(Math.max(...arr) - Math.min(...arr));