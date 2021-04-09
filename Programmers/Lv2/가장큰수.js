// 가장 큰 수

const solution = (numbers) => {
  numbers = numbers.map((number) => number.toString()).sort((a, b) => (b + a) - (a + b)).join('');
  
  return numbers[0] === '0' ? '0' : numbers;
}

const numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers));