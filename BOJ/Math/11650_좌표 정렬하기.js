// 11650번 좌표 정렬하기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
3 4
1 1
1 -1
2 2
3 3`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const n = +input();
let arr = Array.from({length: n});

for (let i = 0; i < n; i++) {
  arr[i] = input().split(' ').map(e => parseInt(e));
}

arr = arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .map(v => String(v[0] + ' ' + String(v[1]))).join('\n');

console.log(arr);