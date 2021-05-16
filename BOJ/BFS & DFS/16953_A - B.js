// 16953번 A -> B

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `100 40021`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const DFS = (a, b, v) => {
    if (a === b) {
        console.log(v);
        process.exit();
    }

    if (a * 2 <= b) {
        DFS(a * 2, b, v+1);
    }
    if (a + '1' <= b) {
        DFS(parseInt(a + '1'), b, v+1);
    }
}

const [A, B] = input().split(' ').map(e => parseInt(e));
DFS(A, B, 1);
console.log(-1);