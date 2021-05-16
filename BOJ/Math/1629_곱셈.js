// 1629번 곱셈
// 코드참조: https://kscodebase.tistory.com/414
// Number 타입은 정수를 안정적으로 나타낼 수 있는 값이 한정적이라 그보다 큰 수를 다룰 때는 자바스크립트 내장 객체인 BigInt를 사용해야 한다.

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `10 11 12`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const pow = (a, b, c) => {
  if (b == 0) return BigInt(1);

  const tmp = pow(a, BigInt(parseInt(b / BigInt(2))), c);
  if (b % BigInt(2)) {
    return (((tmp * tmp) % c) * a) % c;
  } else {
    return (tmp * tmp) % c;
  }
}

const [a, b, c] = input().split(' ').map(e => BigInt(e));

console.log(parseInt(pow(a, b, c)));
