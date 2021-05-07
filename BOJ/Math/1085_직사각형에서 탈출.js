// 1085번 직사각형에서 탈출

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `6 2 10 3`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [x, y, w, h] = input().split(' ').map(e => parseInt(e));

let dx = Math.min(Math.abs(x - w), x);
let dy = Math.min(Math.abs(y - h), y);

console.log(Math.min(dx, dy));