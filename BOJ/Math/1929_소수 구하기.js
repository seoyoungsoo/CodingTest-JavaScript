// 1929번 소수 구하기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3 16`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [m, n] = input().split(' ').map(e => parseInt(e));
const primeNum = Array.from({length: n + 1}, () => 1);
primeNum[1] = 0;

// 에라토스테네스의 체를 사용한 소수 판별
for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  if (primeNum[i]) {
    let tmp = 2;
    while (i * tmp <= n) {
      primeNum[i * tmp] = 0;
      tmp++;
    }
  }
}

const res = [];
for (let i = m; i <= n; i++) {
  if (primeNum[i]) {
    res.push(i);
  }
}
console.log(res.join('\n'));