// 4796번 캠핑

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(e => parseInt(e)));
}).on(('close'), () => {
  let c = 0;
  while (true) {
    let cValue = 0;
    let L = input[c][0], P = input[c][1], V = input[c][2];

    if (L === 0 && P === 0 && V === 0) break;

    while (true) {
      if (V - P >= 0) {
        cValue += L;
        V -= P;
      } else {
        if (V > L) cValue += L;
        else cValue += V;
        console.log(`Case ${++c}: ${cValue}`);
        break;
      }
    }
  }

  process.exit();
})