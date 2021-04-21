// 1773번 Count Items Matching a Rule

const countMatches = (items, ruleKey, ruleValue) => {
  let cnt = 0;
  let i;
  if (ruleKey === 'type') i = 0;
  else if (ruleKey === 'color') i = 1;
  else i = 2;

  items.forEach(item => {
    if (item[i] === ruleValue) cnt++;
  })
  return cnt;
}

const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
console.log(countMatches(items, ruleKey, ruleValue));