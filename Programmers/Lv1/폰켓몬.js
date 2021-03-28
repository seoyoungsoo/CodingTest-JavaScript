// 폰켓몬

const solution = (nums) => {
  const numsLength = [...new Set(nums)].length;

  return Math.min(parseInt(nums.length / 2), numsLength);
};

const nums = [3, 1, 2, 3];
console.log(solution(nums));
