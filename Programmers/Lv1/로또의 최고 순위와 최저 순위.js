// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  const correctNum = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const undef = lottos.filter((lotto) => !lotto).length;

  const min = 7 - correctNum >= 6 ? 6 : 7 - correctNum;
  const max = min - undef < 1 ? 1 : min - undef;

  return [max, min];
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));
