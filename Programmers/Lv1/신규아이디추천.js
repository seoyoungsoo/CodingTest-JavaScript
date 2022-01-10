// 신규 아이디 추천
// 참고: https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%8B%A0%EA%B7%9C-%EC%95%84%EC%9D%B4%EB%94%94-%EC%B6%94%EC%B2%9C-JavaScript

function solution(new_id) {
  const res = new_id.toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\/$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return res.length > 2 ? res : res + res.charAt(res.length - 1).repeat(3 - res.length);
}

const new_id = "=.=";
console.log(solution(new_id));