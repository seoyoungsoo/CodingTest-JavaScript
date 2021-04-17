// 771번 Jewels and Stones

const numJewelsInStones = (jewels, stones) => {
  let hash = {};
  let cnt = 0;

  for (let i of jewels) {
    hash[i] = true;
  }
  for (let j of stones) {
    if (hash[j]) cnt++;
  }
  return cnt;
}

const jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));