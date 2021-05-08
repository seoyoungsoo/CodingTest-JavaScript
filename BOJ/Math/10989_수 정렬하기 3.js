// 10989번 수 정렬하기 3

// node.js 풀이 결과 입출력 관리만으로 메모리 초과 발생
// python으로 풀고 제출함
const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `10
5
2
3ㄴ
1
4
2
3
5
1
7`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const n = +input();
const res = Array.from({length: 10001}, () => 0);

for (let i = 0; i < n; i++) {
  res[+input()] += 1;
}

for (let i = 0; i < res.length; i++) {
  for (let j = 0; j < res[i]; j++) {
    console.log(i);
  }
}