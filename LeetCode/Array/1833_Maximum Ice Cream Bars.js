// 1833번 Maximum Ice Cream Bars

const maxIceCream = (costs, coins) => {
  costs.sort((a, b) => a - b);
  let res = 0;
  
  if (Math.min(...costs) > coins) return res;

  costs.reduce((acc, cur) => {
    if (acc + cur <= coins) res++;
    return acc += cur;
  }, 0);
  return res;
}

const costs = [7,3,3,6,6,6,10,5,9,2], coins = 56;
console.log(maxIceCream(costs, coins));