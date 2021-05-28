// 13300번 방 배정

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3 3
0 3
1 5
0 6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(e => parseInt(e));

let boy = Array.from({length:7}, () => 0);
let girl = Array.from({length:7}, () => 0);

for (let i = 0; i < N; i++) {
    const [S, Y] = input().split(' ').map(e => parseInt(e));

    if (S === 0) girl[Y]++;
    else boy[Y]++;
}

for (let i = 0; i < 7; i++) {
    if (girl[i] % K === 0) {
        girl[i] = Math.floor(girl[i] / K);
    } else {
        girl[i] = Math.floor(girl[i] / K + 1); 
    }

    if (boy[i] % K === 0) {
        boy[i] = Math.floor(boy[i] / K);
    } else {
        boy[i] = Math.floor(boy[i] / K + 1);
    }
}

const res = girl.reduce((acc, cur) => acc + cur, 0) + boy.reduce((acc, cur) => acc + cur, 0);

console.log(res);