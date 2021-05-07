// 10250번 ACM 호텔

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3
6 12 10
30 50 72
10 10 91`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const T = +input();

for (let x = 0; x < T; x++) {
  const [H, W, N] = input().split(' ').map(e => parseInt(e));
  let cnt = 0;

  for (let i = 1; i < W + 1; i++) {
    for (let j = 1; j < H + 1; j++) {
      cnt++;
      if (cnt === N) {
        let tmp = '';
        tmp += j;
        if (i >= 10) tmp += i;
        else {
          tmp += 0;
          tmp += i;
        }
        // tmp += 0;
        // tmp += i;
        console.log(tmp);
        break;
      }
      // console.log(j, 0, i+1);
    }
  }
}