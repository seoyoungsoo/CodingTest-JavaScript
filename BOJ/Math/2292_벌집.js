// 2292번 벌집

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `13`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = +input();

let num = 1, cnt = 1;

while (num < N) {
  num += cnt++ * 6;
}

console.log(cnt);