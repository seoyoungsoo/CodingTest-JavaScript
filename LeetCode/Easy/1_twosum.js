// 1번 Two Sum
// Hash와 Map을 사용한 풀이: https://fennecfox-dev.tistory.com/31

const twoSum = (nums, target) => {
  for (let i=0; i<nums.length-1; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

const twoSum = (nums, target) => {

}

const nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));