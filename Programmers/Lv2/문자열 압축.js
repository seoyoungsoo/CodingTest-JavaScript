// 문자열 압축

const solution = (s) => {
  if (s.length === 1) return 1;

  let res = [];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let cnt = 1, string = '';

    for (let j = 0; j < s.length; j += i) {
      const crnt = s.substr(j, i);
      const next = s.substr(j+i, i);

      if (crnt === next) cnt++;
      else {
        string = cnt > 1 ? string + cnt + crnt : string + crnt;
        cnt = 1;
      }
    }
    res.push(string.length);
  }
  return Math.min(...res);
}

const s = 'aabbaccc';
console.log(solution(s));