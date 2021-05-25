// 10809번 알파벳 찾기

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
const res = Array(alphabet.length);

for (let i = 0; i < alphabet.length; i++) {
  let tmp = S.indexOf(alphabet[i]);
  res[i] = tmp;
}

console.log(res.join(' '));