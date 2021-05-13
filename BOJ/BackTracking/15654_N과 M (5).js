// 15652번 N과 M (5)

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

const permutation = (arr, num) => {
  let res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, num - 1);
    const combineFix = permutationArr.map((v) => [fixer, ...v]);
    res.push(...combineFix);
  })
  return res;
}

const [n, m] = input().split(' ').map(e => parseInt(e));
const arr = input().split(' ').map(e => parseInt(e)).sort((a, b) => a - b);

const result = permutation(arr, m);

for (let res of result) {
  console.log(res.join(' '));
}