// 튜플

const solution = (s) => {
  const tmp = s.slice(2, s.length - 2).split('},{');
  const arr = [], res = [];

  for (let i in tmp) {
    arr.push(tmp[i].split(','));
  }
  arr.sort((a, b) => a.length - b.length);
  arr.forEach(items => {
    items.forEach(item => {
      if (!res.includes(+item)) {
        res.push(+item);
      }
    })
  })
  return res;
}

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
console.log(solution(s));