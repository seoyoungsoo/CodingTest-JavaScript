// BinaryGaps

const solution = (N) => {
  const bin = N.toString(2);
  let max = 0, tmp = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '0') {
      tmp++;
      continue;
    }

    if (tmp > max) {
      max = tmp;
    }
    tmp = 0;
  }
  return max;
}

const N = 1041;
console.log(solution(N));