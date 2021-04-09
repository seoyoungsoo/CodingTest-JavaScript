// H-Index

const solution = (citations) => {
  let res = 0;

  if (Math.min(...citations) > citations.length) return citations.length;
  if (Math.max(...citations) === 0) return res;

  for (let i = 0; i < citations.length + 1; i++) {
    let cnt = 0;
    for (let j of citations) {
      if (i <= j) cnt += 1;
    if (i <= cnt && cnt > res) res = i;
    }
  }
  return res;
}

// 다른 풀이
// const solution = (citations) => {
//   citations.sort((a, b) => b - a);
//   let i = 0;
//   while (i + 1 <= citations[i]) i++;

//   return i;
// }

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));