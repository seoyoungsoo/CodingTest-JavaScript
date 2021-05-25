// 11721번 열 개씩 끊어 출력하기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `OneTwoThreeFourFiveSixSevenEightNineTen`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let string = input().split('');
let res = [];

while (string.length > 10) {
  let tmp = string.splice(0, 10).join('');
  res.push(tmp);
}

if(string.length) {
  res.push(string.join(''));
}

console.log(res.join('\n'));