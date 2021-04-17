// 1470번 Shuffle the Array

const shuffle = (nums, n) => {
  const arr = nums.splice(n)
  
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i]);
    res.push(arr[i]);
  }
  return res;
}

const nums = [2, 5, 1, 3, 4, 7], n = 3;
console.log(shuffle(nums, n));