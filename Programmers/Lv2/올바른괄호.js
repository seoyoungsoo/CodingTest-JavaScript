// 올바른 괄호

const solution = (s) => {
  if (s[0] === ")") {
    return false;
  }
  const arr = [];
  [...s].forEach((item) => {
    if (item === '(') arr.push(item);
    else {
      if (!arr.length) return false;
      else arr.pop();
    }
  });
  return arr.length === 0;
}

const s = "()()";
console.log(solution(s));