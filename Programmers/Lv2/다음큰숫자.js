// 다음 큰 숫자

const solution = (n) => {
  const one = n.toString(2).split('').filter((item) => {
    return item === '1';
  }).length;
  
  while (true) {
    n++;
    if (one === [...n.toString(2)].filter((item) => item === '1').length) {
      return n;
    }
  }
}

const n = 78;
console.log(solution(n));