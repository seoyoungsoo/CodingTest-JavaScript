// 2164번 문제

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 나의 풀이
// 반복문을 통한 계산은 시간 초과에 걸린다.
// const num = Array.from({length: +input()}, (v, i) => i + 1);

// while (num.length !== 1) {
//   num.shift();
//   const n = num.shift();
//   num.push(n);
// }

// console.log(num[0]);

// 다른 풀이
// 2진법을 통해 속도를 빠르게 개선한 풀이
const num = input();
const bin = parseInt(num).toString(2).split('');
bin.shift();

const res = parseInt(bin.join(''), 2);
console.log(res ? res * 2 : num);