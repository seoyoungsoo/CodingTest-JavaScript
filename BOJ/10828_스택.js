// 10828번 스택

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `7
pop
top
push 123
top
pop
top
pop`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 나의 풀이
// 시간 초과가 발생했다.
// const N = +input();
// let stack = [];

// for (let _ = 0; _ < N; _++) {
//   const [cmd, n] = input().split(' ');

//   if (cmd === 'push') {
//     stack.push(n);
//   } else if (cmd === 'top') {
//     if (stack.length) console.log(+stack[stack.length - 1]);
//     else console.log(-1);
//   } else if (cmd === 'pop') {
//     if (stack.length) {
//       console.log(+stack.pop());
//     } else {
//       console.log(-1);
//     } 
//   } else if (cmd === 'size') {
//     console.log(stack.length);
//   } else {
//     if (stack.length) console.log(0);
//     else console.log(1);
//   }
// }

// 2차 풀이
const stack = [];
const res = [];
const num = parseInt(input());

const stackAct = {
  push: (value) => stack.push(value),
  pop: () => (stack.length ? res.push(stack.pop()) : res.push(-1)),
  size: () => res.push(stack.length),
  empty: () => res.push(stack.length ? 0 : 1),
  top: () => res.push(stack.length ? stack[stack.length - 1] : -1)
};

for (let i = 0; i < num; i++) {
  const [cmd, v] = input().split(' ');
  stackAct[cmd](v);
}

console.log(res.join('\n'));