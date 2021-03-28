const solution = (a, b) => {
  let sumN = 0;

  if (a >= b) {
    for (let i = b; i <= a; i++) {
      sumN += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      sumN += i;
    }
  }
  return sumN;
};

const a = 3;
const b = 5;
console.log(solution(a, b));
