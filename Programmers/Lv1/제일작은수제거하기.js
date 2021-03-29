// 제일 작은 수 제거하기

const solution = (arr) => {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  
  return arr.length ? arr : [-1];
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));