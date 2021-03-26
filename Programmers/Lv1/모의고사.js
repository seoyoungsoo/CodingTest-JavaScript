const solution = (answers) => {
  const ptn1 = [1, 2, 3, 4, 5];
  const ptn2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const ptn3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  for (let value in answers) {
    if (answers[value] === ptn1[value % ptn1.length]) score[0]++;
    if (answers[value] === ptn2[value % ptn2.length]) score[1]++;
    if (answers[value] === ptn3[value % ptn3.length]) score[2]++;
  }

  return score.reduce((acc, cur, idx) => (cur === Math.max(...score) ? acc.push(idx+1) : acc, acc), []);
};

answers = [1, 2, 3, 4, 5];
console.log(solution(answers));
