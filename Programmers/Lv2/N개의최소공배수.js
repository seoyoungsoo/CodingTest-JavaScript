// N개의 최소공배수
// javascript의 gcd 구하는 방법과 reduce를 사용한 lcm을 중요하게 보자

const solution = (arr) => {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  
  return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur));
}

const arr = [2, 6, 8, 14];
console.log(solution(arr));