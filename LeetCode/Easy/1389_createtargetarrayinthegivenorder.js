// 1389번 Create Target Array in the Given Order

const createTargetArray = (nums, index) => {
  const res = [];

  nums.forEach((num, idx) => {
    res.splice(index[idx], 0, num);
  })
  return res;
}

const nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1];
console.log(createTargetArray(nums, index));