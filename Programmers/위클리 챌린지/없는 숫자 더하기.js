// 없는 숫자 더하기

function solution(numbers) {
  return numbers.reduce((cur, arr, i) => cur - arr, 45);
}

const numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers));
