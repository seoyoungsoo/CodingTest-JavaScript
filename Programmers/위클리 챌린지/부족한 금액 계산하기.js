const solution = (price, money, count) => {
  let res = 0;

  for (let i = 1; i <= count; i++) {
    res += price * i;
  }

  return res > money ? res - money : 0;
};

const price = 3,
  money = 20,
  count = 4;
console.log(solution(price, money, count));
