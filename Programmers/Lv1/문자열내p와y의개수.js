const solution = (s) => {
  let answer = true;

  s = s.toLowerCase();
  let cntP = s.match(/p/g);
  let cntY = s.match(/y/g);

  if (cntP === null) cntP = [];
  if (cntY === null) cntY = [];

  if (cntP.length !== cntY.length) answer = false;

  return answer;
};

const s = "PpoooyY";
console.log(solution(s));