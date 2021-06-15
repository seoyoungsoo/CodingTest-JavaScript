// 15663번 N과 M (9)

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 2
9 7 9 1`
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

const multiDimensionalUnique = (arr) => {
  const uniques = [];
  let itemsFound = {};

  for (let i = 0, l = arr.length; i < l; i++) {
    let stringfied = JSON.stringify(arr[i]);
    if (itemsFound[stringfied]) continue;
    uniques.push(arr[i]);
    itemsFound[stringfied] = true;
  }
  return uniques;
}

const [N, M] = input().split(' ').map(e => parseInt(e));
const arr = input().split(' ').map(e => parseInt(e)).sort((a, b) => a - b);

const data = permutation(arr, M);
const result = multiDimensionalUnique(data);

for (let res of result) {
  console.log(res.join(' '));
}