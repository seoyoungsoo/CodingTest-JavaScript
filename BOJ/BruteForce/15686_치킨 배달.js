// 15686번 치킨 배달

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5 1
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const rec = (start, lev) => {
  if (lev === M) {
    answer = Math.min(answer, calc());
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    arr[lev] = i;
    rec(i+1, lev+1);
  }
}

const calc = () => {
  let sum = 0;
  for (let i = 0; i < house.length; i++) {
    sum += Math.min(...dist[i].filter((c, index) => arr.includes(index)));
  }
  return sum;
}

const [N, M] = input().split(' ').map(e => parseInt(e));
const city = Array.from({length: N}, () => input().split(' ').map(e => parseInt(e)));
const house = [], chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

const dist = Array.from({length: house.length}, () => Array(chicken.length).fill(-1));

for (let i = 0; i < house.length; i++) {
  for (let j = 0; j < chicken.length; j++) {
    dist[i][j] = Math.abs(house[i][0] - chicken[j][0]) + Math.abs(house[i][1] - chicken[j][1]);
  }
}

const arr = Array(M).fill(-1);
let answer = Number.MAX_SAFE_INTEGER;

rec(0, 0);
console.log(answer);