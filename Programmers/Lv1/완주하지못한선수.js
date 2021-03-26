const solution = (participant, completion) => {
  const obj = {};

  participant.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });

  completion.forEach((item) => {
    obj[item] -= 1;
  });

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];
console.log(solution(participant, completion));
