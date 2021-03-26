const solution = (numbers) => {
  const arr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (arr.indexOf(sum) === -1) {
        arr.push(sum);
      }
    }
  }

  arr.sort((a, b) => a - b);
  return arr;
};

numbers = [2, 1, 3, 4, 1];
console.log(solution(numbers));

// Set을 사용한 풀이
// const solution = (numbers) => {
//   const arr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       arr.push(numbers[i] + numbers[j]);
//     }
//   }
//   const result = [...new Set(arr)];

//   return result.sort((a, b) => a - b);
// }
