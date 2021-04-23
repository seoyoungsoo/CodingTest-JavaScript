// 1688번 Count of Matches in Tournament

const numberOfMatches = (n) => {
  let res = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      res += n / 2;
      n /= 2;
    } else {
      res += Math.floor(n / 2);
      n = (n + 1) / 2;
    }
  }
  return res;
}

const n = 14;
console.log(numberOfMatches(n));