// 2159번 팰린드롬 수

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `121
1231
12421
187781
0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const res = [];
while (true) {
  let num = input();
  if (num === '0') break;
  let front, end;

  if (num.length % 2 === 0) {
    front = num.slice(0, num.length / 2).split('');
    end = num.slice(num.length / 2, num.length).split('');
  }
  else {
    front = num.slice(0, Math.floor(num.length / 2)).split('');
    end = num.slice(num.length / 2 + 1, num.length).split('');
  }
  
  let flag = true;
  for (let i = 0, j = front.length - 1; i < front.length; i++, j--) {
    if (front[i] !== end[j]) {
      flag = false;
      break;
    }
  }
  
  if (flag) res.push('yes');
  else res.push('no');
}

console.log(res.join('\n'));