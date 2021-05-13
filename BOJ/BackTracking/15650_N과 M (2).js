// 15650번 N과 M (2)

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 2`
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
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, num - 1);
    const combineFix = combinationArr.map((v) => [fixer, ...v]);
    res.push(...combineFix);
  })
  return res;
}

const [N, M] = input().split(' ').map(e => parseInt(e));
const arr = Array.from({length: N}, (v, i) => i + 1);

const result = combination(arr, M);

for (let res of result) {
  console.log(res.join(' '));
}