// 짝지어 제거하기

// 처음에 forEach문을 사용해서 문제를 풀어냈으나
// 효율성에서 감점을 받았다.
// 효율성 측면에서 일반 for문이 forEach보다 좋은가보다.
// const solution = (s) => {
//   let stack = [];
//   s.split('').forEach(v => {
//     stack.push(v);
//     if (stack[stack.length - 1] === stack[stack.length - 2]) {
//       stack.pop();
//       stack.pop();
//     }
//   })
//   return stack.length ? 0 : 1;
// }

const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length ? 0 : 1;
}

const s = 'abbabb';
console.log(solution(s));