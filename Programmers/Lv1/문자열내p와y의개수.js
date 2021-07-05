const solution = (s) => {
  let answer = true;

  s = s.toLowerCase();
  let cntP = s.match(/p/g) ? s.match(/p/g) : [];
  let cntY = s.match(/y/g) ? s.match(/y/g) : [];

//  if (cntP === null) cntP = []; 
//  if (cntY === null) cntY = [];
  
  

//  if (cntP.length !== cntY.length) answer = false;

//  return answer;
  
  return cntP.length === cntY.length ? answer : false;
};

const s = "PpoooyY";
console.log(solution(s));
