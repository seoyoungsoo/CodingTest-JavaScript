const solution = (s) => {
  const len = s.length;

  if (len === 4 || len === 6) {
    return s.split('').every((c) => !isNaN(c));
  }

  return false;
};

const s = '1e34';
console.log(solution(s));
