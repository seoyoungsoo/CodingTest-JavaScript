// 1313번 Decompress Run-Length Encoded List

const decompressRLElist = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      res.push(nums[i+1]);
    }
  }
  return res;
}

const nums = [1, 2, 3, 4];
console.log(decompressRLElist(nums));