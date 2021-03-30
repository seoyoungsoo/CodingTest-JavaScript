// 행렬의 덧셈
// 코드참조: https://velog.io/@wooder2050/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%96%89%EB%A0%AC%EC%9D%98-%EB%8D%A7%EC%85%88-JavaScript

const solution = (arr1, arr2) => {
  return arr1.map((arr, indexX) => 
    arr.map((num, indexY) => 
      num + arr2[indexX][indexY])
  );
}

const arr1 = [[1, 2], [2, 3]];
const arr2 = [[3, 4], [5, 6]];
console.log(solution(arr1, arr2));