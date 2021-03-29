// 자연수 뒤집어 배열로 만들기

const solution = (n) => {
  return n.toString().split('').map((str) => parseInt(str)).reverse();
}

const n = 12345;
console.log(solution(n));