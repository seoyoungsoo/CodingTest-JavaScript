// 1051번 숫자 정사각형

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3 5
42101
22100
22101`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(e => parseInt(e));
const arr = Array.from({length:N}, () => input().split(''));

const min = Math.min(N, M);
let res = 1, flag = false;

for (let k = min; k > 1; k--) {
  if (flag) break;

  for (let i = 0; i < N - k + 1; i++) {
    if (flag) break;

    for (let j = 0; j < M - k + 1; j++) {
      let stand = arr[i][j];
      if (stand === arr[i+k-1][j] && stand === arr[i][j+k-1] && stand == arr[i+k-1][j+k-1]) {
        res = k;
        flag = true;
        break;
      }
    }
  }
}

console.log(res**2);