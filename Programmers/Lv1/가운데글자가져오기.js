const solution = (s) => {
  const mid = Math.ceil(s.length / 2) - 1;
  
  return s.substr(mid, s.length % 2 === 0 ? 2 : 1);
}

const s = 'abcde';
console.log(solution(s));