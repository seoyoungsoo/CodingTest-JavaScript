// 타겟넘버
// 코드참조: https://kyun2da.github.io/2020/07/09/TargetNumber/
// https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5

const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (idx, value) => {
    if (idx < numbers.length) {
      dfs(idx + 1, value + numbers[idx]);
      dfs(idx + 1, value - numbers[idx]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  dfs(0, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1], target = 3;
console.log(solution(numbers, target));