// 15652번 N과 M (4)
// 중복조합문제
// 코드참조: https://dpsc615.tistory.com/149

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const DFS = (idx, cnt) => {
  if (cnt === m) {
    result += `${res.join(' ')}\n`;
    return;
  }
  for (let i = idx; i < n; i++) {
    res.push(i + 1);
    DFS(i, res.length);
    res.pop();
  }
}

const [n, m] = input().split(' ').map(e => parseInt(e));
const res = [];
let result = '';

DFS(0, 0);
console.log(result);