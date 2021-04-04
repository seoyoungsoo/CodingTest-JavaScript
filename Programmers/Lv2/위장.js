// 위장
// 코드참조: https://eatdeveloplove.tistory.com/104ㄴ

const solution = (clothes) => {
  let count = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    return a;
  }, {})
  
  return Object.values(count).reduce((a, b) => a * (b + 1), 1) - 1;
}

const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));