// 10819번 차이를 최대로

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `6
20 1 15 8 4 10`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(' ').map(e => parseInt(e));

const permutation = (arr, num) => {
  let res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const perArr = permutation(restArr, num - 1);
    const comFixer = perArr.map(v => [fixer, ...v]);
    res.push(...comFixer);
  });
  return res;
}

let per = permutation(arr, N);
let res = 0;

for (let item of per) {
  let s = 0;
  for (let i = 0; i < item.length - 1; i++) {
    s += Math.abs(item[i] - item[i+1]);
  }
  if (s > res) res = s;
}

console.log(res);