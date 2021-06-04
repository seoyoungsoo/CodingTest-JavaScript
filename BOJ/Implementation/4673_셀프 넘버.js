// 4673번 셀프 넘버

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: ``
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const NUM = 10000;
const selfNum = Array.from({length:NUM}, (v, i) => i+1);

for (let i = 1; i <= NUM; i++) {
  const res = i + i.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
  const sameIdx = selfNum.indexOf(res);
  if (sameIdx) {
    selfNum[sameIdx] = false;
  }
}

for (let n of selfNum) {
  if (n) {
    console.log(n);
  }
}