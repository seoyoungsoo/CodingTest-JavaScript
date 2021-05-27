// 1316번 그룹 단어 체커

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4
aba
abab
abcabc
a`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
let groupWord = 0;

for (let i = 0; i < N; i++) {
  const word = input();
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) groupWord++;
}

console.log(groupWord);