// x만큼 간격이 있는 n개의 숫자

const solution = (x, n) => {
  return Array.from({length: n}, (value, index) => (index+1) * x);
  // const result = Array.from({length: n}, _ => x);

  // return result.map((value, index) => {
  //   return value * (index+1);
  // })
}

const x = -4, n = 2;
console.log(solution(x, n));