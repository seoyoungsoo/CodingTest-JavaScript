// 1969번 DNA

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (input) => {
  const [n, m] = input.shift().split(' ').map(e => parseInt(e));
  const dna = Array(n);
  
  for (let item in input) {
    dna[item] = input[item];
  }

  let cnt = 0;
  let result = '';

  for (let i = 0; i < m; i++) {
    let A = [0, 0, 0, 0];
    for (let j = 0; j < n; j++) {
      if (dna[j][i] === 'A') A[0]++;
      else if (dna[j][i] === 'G') A[1]++;
      else if (dna[j][i] === 'C') A[2]++;
      else if (dna[j][i] === 'T') A[3]++;
    }

    const idx = A.indexOf(Math.max(...A));
    if (idx === 0) result += 'A';
    else if (idx === 1) result += 'G';
    else if (idx === 2) result += 'C';
    else if (idx === 3) result += 'T';
    cnt += n - Math.max(...A);
  }
  console.log(result);
  console.log(cnt);
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  solution(input);
  process.exit();
})