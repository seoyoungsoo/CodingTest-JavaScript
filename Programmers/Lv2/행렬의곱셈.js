// 행렬의 곱셈
// 코드 참조: https://jo-c.tistory.com/68

const solution = (arr1, arr2) => {
  const res = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
  // const res = arr1.forEach(v => res.push(Array(arr2[0].length).file()));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        res[i][j] += arr1[i][k] * arr2[k][j]
      }
    }
  }
  return res;
}

const arr1 = [[1, 4], [3, 2], [4, 1]], arr2 = [[3, 3], [3, 3]];
console.log(solution(arr1, arr2));