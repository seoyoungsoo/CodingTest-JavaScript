// 음양 더하기

function solution(absolutes, signs) {
  let result = 0;

  absolutes.forEach((v, i) => {
    if (signs[i]) result += v;
    else result -= v;
  });

  return result;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];
console.log(solution(absolutes, signs));
