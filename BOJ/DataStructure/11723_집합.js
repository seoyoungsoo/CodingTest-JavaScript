// 11723번 집합

// 노드로 풀 경우 메모리초과 문제 발생
const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const m = parseInt(input());
let bit = 0;

const setAct = {
  add: (x) => bit |= (1 << (x - 1)),
  remove: (x) => bit &= ~(1 << (x - 1)),
  check: (x) => (bit & (1 << (x - 1))) ? console.log(1) : console.log(0),
  toggle: (x) => bit = bit ^ (1 << (x - 1)),
  all: () => bit = (1 << 21) -1,
  empty: () => bit = 1 >> 21
}

for (let i = 0; i < m; i++) {
  const [cmd, v] = input().split(' ');

  setAct[cmd](v);
}