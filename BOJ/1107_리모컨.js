// 1107번 리모컨

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5457
    3
    6 7 8`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const check = (num) => {
  let tmp = String(num).split('');
  for (let str of tmp) {
    if (broken.indexOf(str) !== -1) {
      return false;
    }
  }
  return true;
};

const N = parseInt(input());
const M = parseInt(input());
let broken;
//  ++ or --로 이동할 경우 -> 최댓값
let res = Math.abs(100 - N);

// 아래의 한 줄 코드 사용시 런타임 에러 발생
// M > 0 ? (broken = input().split(' ')) : [];
if (M > 0) {
  broken = input().split(' ');
} else {
  broken = [];
}

for (let i = 0; i < 1000001; i++) {
  if (check(i)) {
    res = Math.min(res, String(i).length + Math.abs(i - N));
  }
}
console.log(res);
