// 삼각 달팽이
// 코드참조: https://rutgo-letsgo.tistory.com/182

const solution = (n) => {
  const arr = new Array(n).fill().map((_, i) => new Array(i+1));

  let count = 0, x = -1, y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = ++count;
    n -= 3
  }
  return arr.flat(Infinity);
  // return arr.flatMap(e => e);
}

const n = 4;
console.log(solution(n));