// 이상한 문자 만들기
// 코드참조: https://kimyang-sun.tistory.com/103

const solution = (s) => {
  const result = s.split(' ').map((item) => {
    return item.split('').map((str, idx) => {
      if (idx % 2 === 0) return str.toUpperCase();

      return str.toLowerCase();
    }).join('')
  }).join(' ');

  return result;
}

const s = "try hello world";
console.log(solution(s));