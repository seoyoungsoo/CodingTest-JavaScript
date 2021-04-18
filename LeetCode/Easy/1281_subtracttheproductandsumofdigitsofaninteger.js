// 1281번 Subtract the Product and Sum of Digits of an Integer

const subtractProductAndSum = (n) => {
  n = String(n).split('');
  let product = 1, sum = 0;
  n.forEach(item => {
    product *= +item;
    sum += +item;
  })
  return product - sum;
}

const n = 234;
console.log(subtractProductAndSum(n));