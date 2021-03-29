// 정수 내림차순으로 배치하기

const solution = (n) => {
  return +[...n.toString()].sort((a, b) => b - a).join('');
}

const n = 118372;
console.log(solution(n));