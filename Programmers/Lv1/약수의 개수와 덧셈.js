// 약수의 개수와 덧셈
function isDivisorEven(number) {
  let idx = 1;
  let count = 0;

  while (idx <= number) {
    if (number % idx === 0) count++;
    idx++;
  }

  return count % 2 === 0;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (isDivisorEven(i)) result += i;
    else result -= i;
  }

  return result;
}

const left = 13;
const right = 17;
console.log(solution(left, right));
