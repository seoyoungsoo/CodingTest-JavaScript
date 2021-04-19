// 121번 Best Time to Buy and Sell Stock

const maxProfit = (prices) => {
  let min = 10 ** 5 + 1, profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    min = Math.min(prices[i], min);
    if (prices[i+1] - min > profit) {
      profit = prices[i+1] - min;
    }
  }
  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));