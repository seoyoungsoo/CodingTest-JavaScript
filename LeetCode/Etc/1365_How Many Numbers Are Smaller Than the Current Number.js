// 1365번 How Many Numbers Are Smaller Than the Current Number

const smallerNumbersThanCurrent = (nums) => {
  const res = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] > nums[j]) cnt++;
      }
    }
    res[i] = cnt;
  }
  return res;
}

const nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums));