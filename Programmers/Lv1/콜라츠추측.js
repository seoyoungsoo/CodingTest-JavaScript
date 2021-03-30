// 콜라츠 추측

const solution = (num) => {
  let cnt = 0;

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;

    cnt++;
    if (cnt > 500) return -1;
  }
  return cnt;
}

const n = 6;
console.log(solution(n));