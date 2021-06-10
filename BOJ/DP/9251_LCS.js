// 9251번 LCS

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `ACAYKP
CAPCAK`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const str1 = input().split(''), str2 = input().split('');
const lenStr1 = str1.length, lenStr2 = str2.length;

const arr = Array.from({length:lenStr1+1}, () => Array(lenStr2+1).fill(0));

for (let i = 1; i <= lenStr1; i++) {
  for (let j = 1; j <= lenStr2; j++) {
    if (str1[i-1] === str2[j-1]) {
      arr[i][j] = arr[i-1][j-1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i][j-1], arr[i-1][j]);
    }
  }
}

console.log(arr[lenStr1][lenStr2]);