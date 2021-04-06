// JadenCase 문자열 만들기

// 첫 번째 문자를 슬라이싱할 때 v[0]의 식으로 문제를 제출했을 때,
// 런타임 에러가 발생했다.
// charAt(0)을 사용해 에러를 해결했다.
// 이 외에 substr 와 slice를 사용해서도 문제를 해결할 수 있다.
const solution = (s) => {
  return s.split(' ').map(v => {
    return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
  }).join(' ');
}

const s = "3people unFollowed me";
console.log(solution(s));