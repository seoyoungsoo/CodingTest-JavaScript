// PassingCars

const solution = (A) => {
  let cnt = 0;
  const res = A.reduce((acc, cur) => {
    if (!cur) cnt++;
    else acc += cnt;

    return acc;
  }, 0)

  return res > 1000000000 ? -1 : res;
}

const A = [0, 1, 0, 1, 1];
console.log(solution(A));