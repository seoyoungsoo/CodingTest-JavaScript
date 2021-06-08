// 2548번 대표 자연수

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `6
4 3 2 2 9 10`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const arr = input().split(' ').map(e => parseInt(e)).sort((a, b) => a - b);

let q = parseInt(N / 2);
let r = N % 2;

console.log(arr[q+r-1]);

// let res = Number.MAX_SAFE_INTEGER;
// let min = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   let tmp = 0;
//   for (let j = 0; j < arr.length; j++) {
//     tmp += Math.abs(num - arr[j]);
//   }

//   if (min >= tmp) {
//     min = tmp;
//   }
// }

// console.log(res);