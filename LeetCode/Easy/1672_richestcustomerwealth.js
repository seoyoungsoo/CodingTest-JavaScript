// 1672번 Richest Customer Wealth

const maximumWealth = (accounts) => {
  const arr = accounts.map((account) => account.reduce((acc, cur) => acc += cur, 0));
  return Math.max(...arr);
}

const accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts));