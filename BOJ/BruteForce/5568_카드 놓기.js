// 5568번 카드 놓기

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on(('close'), () => {
  const permutation = (arr, num) => {
    const res = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fix = v;
      const rArr = arr.filter((_, index) => index !== idx);
      const pArr = permutation(rArr, num - 1);
      const cFix = pArr.map((v) => [fix, ...v]);
      res.push(...cFix);
    });
    return res;
  }

  const k = +input[1];
  const cards = [];

  for (let i = 2; i < input.length; i++) {
    cards.push(input[i]);
  }

  const res = new Set();
  const result = [...new Set(permutation(cards, k))];

  result.forEach((item) => res.add(item.join('')));
  console.log(res.size);

  process.exit();
})