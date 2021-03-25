const solution = (s) => {
  return s.split('').sort().reverse().join('');
};

s = 'Zbcdefg';
console.log(solution(s));
