// 1221번 Split a String in Balanced Strings

const balancedStringSplit = (s) => {
  let r = 0, l = 0, res = 0;
  for (let i of s) {
    i === 'R' ? r++ : l++;

    if (r === l) {
      res++;
      r = 0, l = 0;
    }
  }
  return res;
}

const s = "RLRRRLLRLL"
console.log(balancedStringSplit(s));