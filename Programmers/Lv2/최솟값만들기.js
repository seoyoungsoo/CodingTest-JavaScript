// 최솟값 만들기

const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, idx) => {
    return acc += cur * B[idx];
  }, 0);
}

const A = [1, 4, 2], B = [5, 4, 4];
console.log(solution(A, B));