// 10808번 알파벳 개수

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `baekjoon`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const S = input().split('');
const res = Array(26).fill(0);

for (let i = 0; i < S.length; i++) {
  let tmp = alphabet.indexOf(S[i]);
  res[tmp]++;
}

console.log(res.join(' '));