// 1660번 캡틴 이다솜
// 코드참조: https://gglifer-cs.tistory.com/23

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 나의 풀이
// 최소 정사면체의 수를 구하는 문제로 최소값부터 구하는 방식은 맞지 않다.
// const MAX_ARR = 101;

// const solution = (input) => {
//   const n = input[0];
//   const dp = Array(MAX_ARR).fill(0);

//   dp[1] = 1;
//   let i = 2;
//   for (let j = 2; j <= MAX_ARR; j++) {
//     dp[j] = dp[j - 1] + i++;
//   }

//   let tmp = 0;
//   const newDp = dp.map(v => {
//     tmp += v;
//     return tmp;
//   });

//   let min = 0;
//   for (let k = 0; k <= newDp.length; k++) {
//     min += newDp[k];
//     if (min >= n) {
//       console.log(k);
//       break;
//     }
//   }
// }

const solution = (input) => {
  const n = input[0];
  const dp = Array.from({length: n + 1}, (v, i) => i);
  let [i, j, k] = [1, 1, 1];

  while (k <= n) {
    for (let num = 1; num <= n; num++) {
      if (num >= k) {
        dp[num] = Math.min(dp[num], dp[num-k]+1);
      }
    }
    i += 1;
    j += i;
    k += j;
  }

  console.log(dp[n]);
}

const input = [];
rl.on('line', (line) => {
  input.push(+line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})