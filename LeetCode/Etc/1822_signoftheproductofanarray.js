// 1822번 Sign of the Product of an Array

const arraySign = (nums) => {
  const res = nums.reduce((acc, cur) => acc *= cur, 1);
  
  if (res > 0) {
    return 1;
  } else if (res < 0){
    return -1;
  } else {
    return 0;
  }
}

const nums = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(nums));