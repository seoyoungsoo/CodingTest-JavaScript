// 없는 숫자 더하기

function solution(numbers) {
  let result = 0;

  for (let i = 1; i < 10; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }
  
  return result;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));