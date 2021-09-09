// OddOccurrencesInArray

const solution = (A) => {
  const dict = {};

  for (let i = 0; i < A.length; i++) {
    if (dict[A[i]]) {
      dict[A[i]]++;
    } else {
      dict[A[i]] = 1;
    }
  }

  for (let item in dict) {
    if (dict[item] % 2) {
      return +item;
    }
  }
}

const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));