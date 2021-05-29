// 2331번 반복수열

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `58 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [A, P] = input().split(' ').map(e => parseInt(e));
let arr = [A];

while (true) {
  let num = String(arr[arr.length-1]);
  let tmp = 0;

  [...num].forEach(v => {
    tmp += Math.pow(v, P);
  })
  
  if (arr.indexOf(tmp) !== -1) {
    if (arr.indexOf(tmp) === 0) {
      arr = [];
    } else {
      arr.splice(arr.indexOf(tmp), arr.length - 1);
    }
    break;
  }

  arr.push(tmp);
}

console.log(arr.length);