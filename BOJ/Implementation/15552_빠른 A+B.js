// 15552번 빠른 A+B

// js 풀이의 경우 입출력 관리만으로 시간 초과
const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
1 1
12 34
5 500
40 60
1000 1000`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const T = parseInt(input());

for (let i = 0; i < T; i++) {
  let [n1, n2] = input().split(' ').map(e => parseInt(e));
  console.log(n1 + n2);
}