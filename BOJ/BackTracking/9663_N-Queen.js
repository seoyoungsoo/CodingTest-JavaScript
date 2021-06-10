// 9663번 N-Queen
// 코드참조: https://mingcoder.me/2020/02/26/Programming/Algorithm/backtracking-ps/

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `8`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const dfs = x => {
  if (x === n) {
    cnt++;
  } else {
    for (let i = 0; i < n; i++) {
      arr[x] = i;
      if (check(x)) {
        dfs(x+1);
      }
    }
  }
}

const check = x => {
  for (let i = 0; i < x; i++) {
    if (arr[x] === arr[i]) {
      return false;
    }

    if (Math.abs(arr[x] - arr[i]) === x - i) {
      return false;
    }
  }
  return true;
}

const n = parseInt(input());
const arr = Array.from({length:n}, () => 0);
let cnt = 0;

dfs(0);
console.log(cnt);