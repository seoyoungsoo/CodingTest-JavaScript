// 2869번 달팽이는 올라가고 싶다

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5 1 6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 상승 A, 하강 B, 정상 V
const [A, B, V] = input().split(' ').map(e => parseInt(e));

console.log(Math.ceil((V - A) / (A - B) + 1));