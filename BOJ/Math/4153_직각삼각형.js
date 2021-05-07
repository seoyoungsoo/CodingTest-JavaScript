// 4153번 직각삼각형

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `6 8 10
25 52 60
5 12 13
0 0 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

while (true) {
  const num = input().split(' ').map(e => parseInt(e)).sort((a, b) => a - b);

  if (num[0] === 0 && num[1] === 0 && num[2] === 0) process.exit();

  Math.pow(num[0], 2) + Math.pow(num[1], 2) === Math.pow(num[2], 2) ?
    console.log('right') :
    console.log('wrong');
}