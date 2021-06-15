// 15657번 N과 M (8)

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 4
1231 1232 1233 1234`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const combination = (arr, num) => {
  let res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index >= idx);
    const combinationArr = combination(restArr, num - 1);
    const combineFix = combinationArr.map((v) => [fixer, ...v]);
    res.push(...combineFix);
  })
  return res;
}

const [N, M] = input().split(' ').map(e => parseInt(e));
const arr = input().split(' ').map(e => parseInt(e)).sort((a, b) => a - b);

const result = combination(arr, M);

for (let res of result) {
  console.log(res.join(' '));
}