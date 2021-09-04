// CyclicRotation

const solution = (A, K) => {
  let tmp;
  
  if (A.length === K || A.length === 1 || A.length === 0) return A;

  for (let i = 0; i < K; i++) {
    tmp = A.pop();
    A.unshift(tmp);
  }

  return A;
}

// const A = [-5000, 1];
const A = [3, 8, 9, 7, 6];
const K = 3;
console.log(solution(A, K));