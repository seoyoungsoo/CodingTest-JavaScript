// 2851번 슈퍼 마리오

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `10
20
30
40
50
60
70
80
90
100`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const mushroom = Array.from({length: 10}, () => parseInt(input()));

let score = 0;
for (let mush of mushroom) {
  preScore = score;
  score += mush;
  if (score >= 100) {
    if (Math.abs(100 - score) > Math.abs(100 - preScore)) {
      score = preScore;
    }
    break;
  }
}

console.log(score);