// 최댓값과 최솟값

const solution = (s) => {
  s = s.split(' ').sort((a, b) => a - b);

  return `${s[0]} ${s[s.length - 1]}`
}

const s = "-1 -2 -3 -4";
console.log(solution(s));