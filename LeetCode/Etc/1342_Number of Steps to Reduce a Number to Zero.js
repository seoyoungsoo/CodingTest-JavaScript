// 1342번 Number of Steps to Reduce a Number to Zero

const numberOfSteps = (num) => {
  let cnt = 0;
  while (num) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    cnt++;
  }
  return cnt;
}

const num = 10**6;
console.log(numberOfSteps(num));