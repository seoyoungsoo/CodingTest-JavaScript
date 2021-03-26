const solution = (a, b) => {
  const date = new Date(`2016,${a},${b}`);

  return date.toString().slice(0,3).toUpperCase();
}

const a = 5;
const b = 24;
console.log(solution(a, b));

// Date 생성자를 사용하지 않고 풀이
// const solution2 = (a, b) => {
//   const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
//   const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   let cnt = 0;
//   for (let i = 0; i < a-1; i++) {
//     cnt += month[i];
//   }

//   cnt += b;
//   return day[cnt % 7];
// }