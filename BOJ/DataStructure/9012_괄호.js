// 9012번 괄호

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `3
((
))
())(()`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const T = +input();
for (let _ = 0; _ < T; _++) {
  let data = input().split('');

  let stack = [];
  stack[0] = data.shift();

  if (stack[0] === ')') {
    console.log('NO');
  }
  else {
    while (data.length) {
      const n = data.shift();
      stack.push(n);

      if (stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') {
        stack.splice(stack.length - 2, 2);
      }
    }

    stack.length ? console.log('NO') : console.log('YES');
  }
}