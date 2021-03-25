const solution = (seoul) => {
  let num = seoul.indexOf("Kim");

  return `김서방은 ${num}에 있다`;
};

const seoul = ["jane", "Kim"];
console.log(solution(seoul));
