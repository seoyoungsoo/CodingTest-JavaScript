// 11444번 피보나치 수 6
// 아주 큰 수의 피보나치를 빠르게 구하기 위해서 행렬의 거듭제곱을 사용한다.
// 코드참조: https://shoark7.github.io/programming/algorithm/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%84-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94-5%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95.html

// 파이썬으로 문제 제출하였음
const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `1000`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 행렬의 곱셈 함수
const multiply = (x1, x2) => {
  let ans = [];
  for (let i = 0; i < x1.length; i++) {
    ans.push([]);
    for (let j = 0; j < x2[0].length; j++) {
      let tmp = 0;
      for (let k = 0; k < x1[0].length; k++) {
        tmp += x1[i][k] * x2[k][j];
      }
      ans[i].push(tmp % c);
    }
  }
  return ans;
}

const power = (x, p) => {
  if (p === 1) return x;
  else {
    let tmp = power(x, parseInt(p / 2));
    if (p % 2) {
      return multiply(multiply(tmp, tmp), x);
    } else {
      return multiply(tmp, tmp);
    }
  }
}

const c = 1000000007;
const n = parseInt(input());
const m = [[1, 1], [1, 0]];

console.log(power(m, n)[0][1])