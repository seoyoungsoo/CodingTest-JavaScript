// 모음 사전

const permutation = (arr, num) => {
  let res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const permutationArr = permutation(arr, num - 1);
    const combineFix = permutationArr.map((v) => [fixer, ...v]);
    res.push(...combineFix);
  })
  return res;
}

const solution = word => {
  const alphabet = ['A', 'E', 'I', 'O', 'U'];
  let res = [];

  for (let i = 1; i < 6; i++) {
    let tmp = permutation(alphabet, i);
    res.push(...tmp.map((v) => v.join('')))
  }
  
  res.sort();
  
  return res.indexOf(word) + 1;
}

const word = 'AAAAE';
console.log(solution(word));