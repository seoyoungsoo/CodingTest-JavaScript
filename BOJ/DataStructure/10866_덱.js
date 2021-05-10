// 10866번 덱

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const q = [];
const res = [];
const N = +input();

const dequeAct = {
  push_front: (v) => q.unshift(v),
  push_back: (v) => q.push(v),
  pop_front: () => (q.length ? res.push(q.shift()) : res.push(-1)),
  pop_back: () => (q.length ? res.push(q.pop()) : res.push(-1)),
  size: () => res.push(q.length),
  empty: () => res.push(q.length ? 0 : 1),
  front: () => res.push(q.length ? q[0] : -1),
  back: () => res.push(q.length ? q[q.length - 1] : -1)
}

for (let i = 0; i < N; i++) {
  const [cmd, v] = input().split(' ');
  dequeAct[cmd](v);
}

console.log(res.join('\n'));