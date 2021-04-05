// 이진 변환 반복하기

const solution = (s) => {
  let cntDelZero = 0;
  let cntZero = 0;

  while (s.length > 1) {
    s = [...s].filter((item) => {
      if (item === '1') return '1';
      else cntZero++;
    }).join('').length.toString(2);
    cntDelZero++;
  }

  return [cntDelZero, cntZero];
}

const s = '110010101001';
console.log(solution(s));