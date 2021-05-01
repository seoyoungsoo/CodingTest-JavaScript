// 1182번 부분수열의 합
// 코드참조: https://mingcoder.me/2020/02/08/Programming/Algorithm/baekjoon-1182/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (input) => {
  const [n, s] = input.shift().split(' ').map(e => parseInt(e));
  const arr = input.shift().split(' ').map(e => parseInt(e));
  const dp = Array(n).fill(null).map((a, i) => [arr[i]]);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < dp[j].length; k++) {
        dp[i].push(dp[i][0] + dp[j][k]);
      }
    }
  }

  let res = 0;
  dp.forEach(v => v.forEach(i => {
    if (i === s) res++;
  }));

  console.log(res);
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})