// 1759번 암호 만들기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 6
a t c i s w`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const combination = (arr, num) => {
  const res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const comArr = combination(restArr, num - 1);
    const comFix = comArr.map(v => [fixed, ...v]);
    res.push(...comFix);
  });
  return res;
}

const vowel = ['a', 'e', 'i', 'o', 'u'];
const [L, C] = input().split(' ').map(e => parseInt(e));
const text = input().split(' ').sort((a, b) => a.charCodeAt() - b.charCodeAt());

const arr = combination(text, L);
const res = [];

for (let word of arr) {
  let cntVowel = 0, cntElse = 0;
  
  for (let w of word) {
    if (vowel.indexOf(w) !== -1) cntVowel++;
    else if (vowel.indexOf(w) === -1) cntElse++;

    if (cntVowel >= 1 && cntElse >= 2) {
      res.push(word.join(''));
      break;
    }
  }
}

console.log(res.join('\n'));