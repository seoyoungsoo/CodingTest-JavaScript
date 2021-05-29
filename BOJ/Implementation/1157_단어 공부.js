// 1157번 단어 공부
// js, 아스키코드 간 변환 코드: https://hceaan.tistory.com/70

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `zZa`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let word = input().toUpperCase();
const res = Array.from({length:26}, () => 0);

for (let i = 0; i < word.length; i++) {
  res[word.charCodeAt(i) - 65]++;
}

const max = Math.max(...res);
const idx = res.indexOf(max);
let flag = false;

for (let j = 0; j < 26; j++) {
  if (res[j] === max && idx !== j) {
    flag = true;
    break;
  }
}

console.log(flag ? "?" : String.fromCharCode(idx + 65));