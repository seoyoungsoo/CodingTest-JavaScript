// 2751번 수 정렬하기 2

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

const n = +input();
const arr = Array.from({length: n}, () => +input()).sort((a, b) => a - b);

console.log(arr.join('\n'));