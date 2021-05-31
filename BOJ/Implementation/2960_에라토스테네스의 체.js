// 2960번 에라토스테네스의 체
// 풀이참조: https://doobudubu.tistory.com/219

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `10 7`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(e => parseInt(e));
const arr = Array.from({length:N}, (v, i) => i+2);
let a = [], cnt = 0;

for (let i = 2; i <= N; i++) {
  for (let j = i; j <= N; j += i) {
    if (a[j] === 0) continue;
    a[j] = 0;
    cnt++;

    if (cnt === K) {
      console.log(j);
      return;
    }
  }
}