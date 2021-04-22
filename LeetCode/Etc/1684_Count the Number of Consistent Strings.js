// 1684번 Count the Number of Consistent Strings

const countConsistentStrings = (allowed, words) => {
  return words.filter(word => [...word].every(w => allowed.includes(w))).length;
}

const countConsistentStrings2 = (allowed, words) => {
  let cnt = 0;
  words.forEach((word) => {
    let contains = true;
    for (let i = 0; i < word.length; i++) {
      if (!allowed.includes(word[i])) {
        contains = false;
        break;
      }
    }
    if (contains) cnt++;
  })

  return cnt;
}

const allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
console.log(countConsistentStrings(allowed, words));