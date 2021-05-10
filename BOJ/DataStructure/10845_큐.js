// 10845번 큐

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
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

const queueAct = {
  push: (v) => q.push(v),
  pop: () => (q.length ? res.push(q.shift()) : res.push(-1)),
  size: () => res.push(q.length),
  empty: () => res.push(q.length ? 0 : 1),
  front: () => res.push(q.length ? q[0] : -1),
  back: () => res.push(q.length ? q[q.length - 1] : -1)
}

for (let i = 0; i < N; i++) {
  const [cmd, v] = input().split(' ');
  queueAct[cmd](v);
}

console.log(res.join('\n'));