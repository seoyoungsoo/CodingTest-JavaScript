// 프린터
// 코드참조: https://juicylog.com/39

const solution = (priorities, location) => {
  const arr = priorities.map((v, i) => ({v: v, i: i}));
  const result = [];
  
  while (arr.length) {
    const pIdx = arr.findIndex(doc => doc.v > arr[0].v);

    pIdx === -1 ? result.push(arr.shift()) : arr.push(arr.shift());
  }
  return result.findIndex(doc => doc.i === location) + 1;
}

const priorities = [2, 1, 3, 2], location = 2;
console.log(solution(priorities, location));