// 1827번 Minimum Operations to Make the Array Increasing

// 나의 풀이
// 메모리 활용에서 낮은 효율성을 보인다.
const minOperations = (nums) => {
  let res = 0;
  if (nums.length === 1) return res;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i+1]) {
      nums[i+1] = nums[i] + 1;
      res += 1;
    } else if (nums[i] > nums[i+1]) {
      let tmp = nums[i] - nums[i+1] + 1;
      nums[i + 1] += tmp;
      res += tmp;
    }
  }
  return res;
}

// abs를 사용한 풀이
const minOperations2 = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i+1] - nums[i];
    if (diff <= 0) {
      nums[i+1] += Math.abs(diff) + 1;
      res += Math.abs(diff) + 1;
    }
  }
  return res;
}

const nums = [1, 5, 2, 4, 1];
console.log(minOperations(nums));