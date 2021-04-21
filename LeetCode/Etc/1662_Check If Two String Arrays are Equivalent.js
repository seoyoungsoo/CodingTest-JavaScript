// 1662번 Check If Two String Arrays are Equivalent

// 나의 풀이
const arrayStringsAreEqual = (word1, word2) => {
  word1 = word1.reduce((acc, cur) => acc += cur, '');
  word2 = word2.reduce((acc, cur) => acc += cur, '');

  return word1 === word2 ? true : false;
}

// 다른 풀이
// const arrayStringsAreEqual2 = (word1, word2) => {
//   return word1.join('') === word2.join('');
// }

const word1 = ["ab", "c"], word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2));