// 2108번 통계학

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
-1
-2
-3
-1
-2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const arr = Array.from({length:N}, () => parseInt(input())).sort((a, b) => a - b);
const res = [];

// 산술 평균 구하기
res.push(Math.round(arr.reduce((cur, acc) => cur + acc, 0) / N));

// 중앙값 구하기
res.push(arr[Math.floor(arr.length / 2)]);

// 최빈값 구하기
// 코드참조: https://velog.io/@yujo/JSBOJ-2108-%ED%86%B5%EA%B3%84%ED%95%99
const checkValue = new Map();
for (let i = 0; i < arr.length; i++) {
  if (checkValue.has(arr[i])) {
    checkValue.set(arr[i], checkValue.get(arr[i]) + 100);
  } else {
    checkValue.set(arr[i], 0);
  }
}

let max = 0;
let cValueArr = [];

for (let v of checkValue.keys()) {
  if (max < checkValue.get(v)) {
    max = checkValue.get(v);
  }
}

for (let v of checkValue.keys()) {
  if (max === checkValue.get(v)) {
    cValueArr.push(v);
  }
}

let mostV = 0;
if (cValueArr.length > 1) {
  mostV = cValueArr[1];
} else {
  mostV = cValueArr[0];
}
ㄴ
res.push(mostV);

// 범위 구하기
res.push(arr[arr.length - 1] - arr[0]);

console.log(res.join('\n'));