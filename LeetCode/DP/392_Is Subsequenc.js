// 392번 Is Subsequence

const isSubsequence = (s, t) => {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return s.length === i;
}

const s = 'abc', t = 'ahbgdc';
console.log(isSubsequence(s, t));