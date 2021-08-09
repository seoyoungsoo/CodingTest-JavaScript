const getGrade = (grade) => {
  if (grade >= 90) return 'A';
  else if (grade >= 80) return 'B';
  else if (grade >= 70) return 'C';
  else if (grade >= 50) return 'D';
  else return 'F';
}

const sum = (arr) => {
  return arr.reduce((acc, cur, cnt) => acc + cur, 0);
}

// 함수 출처: https://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
const zip = (rows) => rows[0].map((_, c) => rows.map(row => row[c]));

const doubleCheck = (arr, num) => {
  return arr.filter((v) => v === num).length;
}

const solution = (scores) => {
  const zipScores = zip([...scores]);

  const res = zipScores.map((score, idx) => {
    if (score[idx] === Math.max(...score) || score[idx] === Math.min(...score)) {
      if (doubleCheck(score, score[idx]) === 1) {
        score.splice(idx, 1);
      }
    }
    const total = sum(score);
    return getGrade(total / score.length);
  })

  return res.join('');
}

const scores = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];
console.log(solution(scores));