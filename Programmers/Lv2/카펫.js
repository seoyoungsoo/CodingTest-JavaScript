// 카펫

const solution = (brown, yellow) => {
  for (let i = 1; i < parseInt(Math.sqrt(yellow))+1; i++) {
    if (yellow % i === 0) {
      j = yellow / i
      if ((i+j) * 2 + 4 === brown) {
        return [j+2, i+2];
      }
    }
  }
}

const brown = 24, yellow = 24;
console.log(solution(brown, yellow));