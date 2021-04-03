// 기능개발

// 기존에 풀었던 파이썬 코드를 참조
const solution = (progress, speeds) => {
  const answer = [];
  let time = 0, count = 0;

  while (progress.length) {
    if (progress[0] + time * speeds[0] >= 100) {
      progress.shift();
      speeds.shift();
      count++;
    } else {
      if (count) {
        answer.push(count);
        count = 0;
      }
      time += 1
    }
  }
  answer.push(count);
  return answer;
}

// 자바스크립트 특징을 가진 코딩 방법
// const solution = (progress, speeds) => {
//   let answer = [0];
//   let days = progress.map((p, i) => Math.ceil((100 - p) / speeds[i]));
//   let maxDay = days[0];

//   for(let i = 0, j = 0; i<days.length; i++) {
//     if(days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }

//   return answer;
// }

const progress = [93, 30, 55], speeds = [1, 30, 5];
console.log(solution(progress, speeds));